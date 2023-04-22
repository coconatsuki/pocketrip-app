import { useSession } from "@supabase/auth-helpers-react";
import { useState, useEffect, SyntheticEvent } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { getProfile, downloadAvatar } from "./api/profile";
import { useRouter } from "next/router";

import Link from "next/link";

import Avatar from "./components/avatar";

export default function Profile() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const user = useUser();
  const [loading, setLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);
  const [avatar_path, setAvatarPath] = useState<string | null>(null);
  const [displayUsernameWarning, setDisplayUsernameWarning] =
    useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      getProfile({
        supabase,
        setLoading,
        user,
        setUsername,
        setAvatarPath,
      }).then(() => {
        checkUsername();
      });
    } else {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  useEffect(() => {
    if (avatar_path) downloadAvatar({ supabase, avatar_path, setAvatarUrl });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [avatar_path]);

  async function updateProfile(event: SyntheticEvent) {
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

  function checkUsername() {
    !username && setDisplayUsernameWarning(true);
  }

  return (
    <>
      <form onSubmit={updateProfile} className="form-widget">
        <Avatar
          supabase={supabase}
          avatar_path={avatar_path}
          size={150}
          onUpload={(event: SyntheticEvent, url: string) => {
            setAvatarPath(url);
            updateProfile(event);
          }}
        />
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" value={user && user.email} disabled />
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
      <Link href={username ? "/home" : "/profile"} onClick={checkUsername}>
        Go to Homepage
      </Link>
      {!username && displayUsernameWarning && (
        <span className="text-red-600 mx-8">Please provide a username</span>
      )}
    </>
  );
}
