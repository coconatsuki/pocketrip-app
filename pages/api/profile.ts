import { User, Profile, Username, AvatarUrl } from "./../../lib/database.types";
import { Dispatch, SetStateAction } from "react";

type SetStateActionString = Dispatch<SetStateAction<string>>;
type SetStateActionBoolean = Dispatch<SetStateAction<boolean>>;

// type setAvatarPathFunction = (avatarPath: string) => void;
// type setUsernameFunction = (username: string) => void;
// type setLoadingFunction = (loading: boolean) => void;

// interface Session {
//   provider_token?: string | null;
//   access_token: string;
//   expires_in?: number;
//   expires_at?: number;
//   refresh_token: string;
//   token_type: string;
//   user: User;
// }

export const getProfile = async ({
  supabase,
  setLoading,
  user,
  setUsername,
  setAvatarPath,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: any;
  setLoading: SetStateActionBoolean;
  user: User;
  setUsername: SetStateActionString;
  setAvatarPath: SetStateActionString;
}): Promise<{ username: string | null }> => {
  let username;
  setLoading(true);

  const { data, error } = await supabase
    .from("profiles")
    .select(`username, avatar_url`)
    .eq("id", user.id)
    .single();

  if (error) {
    throw new Error("Error loading user data!");
  }

  if (data) {
    setUsername(data.username);
    setAvatarPath(data.avatar_url);
    username = data.username;
  }
  setLoading(false);
  return username;
};

export const downloadAvatar = async ({
  supabase,
  avatar_path,
  setAvatarUrl,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: any;
  avatar_path: string;
  setAvatarUrl: SetStateActionString;
}): Promise<void> => {
  const { data, error }: { data: any; error: Error } = await supabase.storage
    .from("avatars")
    .download(avatar_path);
  if (error) {
    throw new Error("Error downloading image: ", error.message);
  }
  const url = URL.createObjectURL(data);
  setAvatarUrl(url);
};

export const getProfileServerSide = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: any,
  userId: string
): Promise<{ username: string | null; avatar_url: string | null }> => {
  console.log(`supabase: ${supabase}`);
  const { data, error } = await supabase
    .from("profiles")
    .select(`username, avatar_url`)
    .eq("id", userId)
    .single();
  if (error) {
    throw new Error("Error getting user data");
  }
  return { username: data.username, avatar_url: data.avatar_url };
};
