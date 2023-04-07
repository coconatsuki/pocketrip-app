export const getProfile = async ({
  supabase,
  setLoading,
  user,
  setUsername,
  setAvatarPath,
}) => {
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
    }
  } catch (error) {
    alert("Error loading user data!");
    console.log(error);
  } finally {
    setLoading(false);
  }
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
