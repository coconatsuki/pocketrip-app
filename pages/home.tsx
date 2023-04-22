// import { useSession } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";
import Link from "next/link";
import { downloadAvatar, getProfileServerSide } from "./api/profile";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext } from "next";

export default function Home({ username, avatar_path }) {
  const supabase = useSupabaseClient();
  const [loading, setLoading] = useState(true);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    if (avatar_path) {
      setLoading(true);
      downloadAvatar({ supabase, avatar_path, setAvatarUrl }).then(() =>
        setLoading(false)
      );
    }
  }, [avatar_path]);

  return (
    <>
      <div>
        <h1>{`WELCOME ${username}`}</h1>
        {avatar_url && (
          <div className="relative w-48 h-48">
            {loading ? (
              "loading"
            ) : (
              <Image
                src={avatar_url}
                fill
                alt="avatar"
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        )}
        <Link href="/profile">Edit Profile</Link>
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const userId = session.user.id;

  const { username, avatar_url } = await getProfileServerSide(supabase, userId);

  if (!username) {
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    };
  }

  return {
    props: {
      username,
      avatar_path: avatar_url,
    },
  };
};
