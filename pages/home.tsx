import Account from "./components/account";
import { useSession } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

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
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async () => {
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

  return (
    <>
      {!username ? (
        <Account
          session={session}
          supabase={supabase}
          user={user}
          loading={loading}
          setLoading={setLoading}
          username={username}
          setUsername={setUsername}
          avatar_url={avatar_url}
          setAvatarUrl={setAvatarUrl}
          updateProfile={updateProfile}
        />
      ) : (
        <h1>{`WELCOME ${username}`}</h1>
      )}
    </>
  );
}
