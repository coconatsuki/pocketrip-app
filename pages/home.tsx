import Account from "./components/account";
import { useSession } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const [avatar_path, setAvatarPath] = useState(null);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);

  useEffect(() => {
    getProfile();
  }, [session]);

  useEffect(() => {
    if (avatar_path) downloadAvatar(avatar_path);
  }, [avatar_path]);

  const getProfile = async () => {
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

  const updateProfile = async (user) => {
    try {
      setLoading(true);

      const updates = {
        id: user.id,
        username,
        avatar_url,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const downloadAvatar = async (path) => {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);
      if (error) {
        throw error;
      }
      const avatarUrl = URL.createObjectURL(data);
      setAvatarUrl(avatarUrl);
    } catch (error) {
      console.log("Error downloading image: ", error);
    }
  };

  const onAvatarUpload = async (newAvatarUrl) => {
    setAvatarUrl(newAvatarUrl);
    updateProfile(user);
  };

  const uploadAvatar = async (event) => {
    try {
      setUploadingAvatar(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${user.uid}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, { upsert: true });

      if (uploadError) {
        throw uploadError;
      }

      onAvatarUpload(filePath);
    } catch (error) {
      alert("Error uploading avatar!");
      console.log(error);
    } finally {
      setUploadingAvatar(false);
    }
  };

  return (
    <>
      {!username ? (
        <Account
          session={session}
          supabase={supabase}
          user={user}
          loading={loading}
          username={username}
          setUsername={setUsername}
          avatarUrl={avatar_url}
          setAvatarUrl={setAvatarUrl}
          updateProfile={updateProfile}
          downloadAvatar={downloadAvatar}
          onAvatarUpload={onAvatarUpload}
          uploadAvatar={uploadAvatar}
          uploadingAvatar={uploadingAvatar}
        />
      ) : (
        <div>
          <h1>{`WELCOME ${username}`}</h1>
          {avatar_url && !uploadingAvatar && (
            <div className="relative w-48 h-48">
              <Image
                src={avatar_url}
                fill
                alt="avatar"
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
