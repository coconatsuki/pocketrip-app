export const getProfile = async ({
  supabase,
  setLoading,
  user,
  setUsername,
  setAvatarPath,
}) => {
  let username;
  try {
    setLoading(true);

    const { data, error, status } = await supabase
      .from("profiles")
      .select(`username, avatar_url`)
      .eq("id", user.id)
      .single();

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      setUsername(data.username);
      setAvatarPath(data.avatar_url);
      username = data.username;
    }
  } catch (error) {
    alert("Error loading user data!");
    console.log(error);
  } finally {
    setLoading(false);
  }
  return username;
};

export const downloadAvatar = async ({
  supabase,
  avatar_path,
  setAvatarUrl,
}) => {
  try {
    const { data, error } = await supabase.storage
      .from("avatars")
      .download(avatar_path);
    if (error) {
      throw error;
    }
    const url = URL.createObjectURL(data);
    setAvatarUrl(url);
  } catch (error) {
    console.log("Error downloading image: ", error.message);
  }
};

export const getProfileServerSide = async (supabase, userId) => {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select(`username, avatar_url`)
      .eq("id", userId)
      .single();
    if (error) {
      throw error;
    }
    return { username: data.username, avatar_url: data.avatar_url };
  } catch (error) {
    console.log("Error getting user data");
  }
};
