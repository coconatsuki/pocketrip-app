import { useSession } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";
import { getProfile, downloadAvatar } from "./api/profile";

export default function Home() {
  const router = useRouter();
  const session = useSession();
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const [avatar_path, setAvatarPath] = useState(null);

  useEffect(() => {
    getProfile({ supabase, setLoading, user, setUsername, setAvatarPath });
    // console.log(`username? ${!!username} ${username}`);
    // if (!username) {
    //   router.push("/profile");
    // }
  }, [session]);

  useEffect(() => {
    if (avatar_path) downloadAvatar({ supabase, avatar_path, setAvatarUrl });
  }, [avatar_path]);

  return (
    <>
      <div>
        <h1>{`WELCOME ${username}`}</h1>
        {avatar_url && (
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
    </>
  );
}
