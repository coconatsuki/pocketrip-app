import { useSession } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { getProfile, downloadAvatar } from "./api/profile";
import Avatar from "./components/avatar";

export default function Profile() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const [avatar_path, setAvatarPath] = useState(null);

  useEffect(() => {
    getProfile({
      supabase,
      setLoading,
      user,
      setUsername,
      setAvatarPath,
    });
  }, [session]);

  useEffect(() => {
    if (avatar_path) downloadAvatar({ supabase, avatar_path, setAvatarUrl });
  }, [avatar_path]);

  async function updateProfile(event) {
    event.preventDefault();

    setLoading(true);

    const updates = {
      id: user.id,
      username,
      avatar_url: avatar_path,
      updated_at: new Date(),
    };

    const { error } = await supabase.from("profiles").upsert(updates);

    if (error) {
      alert(error.message);
    }
    setLoading(false);
  }

  return (
    <form onSubmit={updateProfile} className="form-widget">
      <Avatar
        supabase={supabase}
        avatar_path={avatar_path}
        size={150}
        onUpload={(event, url) => {
          setAvatarPath(url);
          updateProfile(event);
        }}
      />
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Name</label>
        <input
          id="username"
          type="text"
          required
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <button
          className="button block primary"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>
      <div>
        <button
          className="button block"
          type="button"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </form>
  );
}
