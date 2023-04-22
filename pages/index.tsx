import Head from "next/head";
//import styles from "@/styles/Home.module.css";
import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Login from "./login";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext } from "next";
import { getProfileServerSide } from "./api/profile";

export default function Index() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <>
      <Head>
        <title>Pocketrip</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-full">
        <div className="container" style={{ padding: "50px 0 100px 0" }}>
          {!session && <Login />}
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session && session.user.id) {
    const userId = session.user.id;

    const { username }: { username: string | null } =
      await getProfileServerSide(supabase, userId);

    if (username) {
      return {
        redirect: {
          destination: "/home",
          permanent: false,
        },
      };
    } else {
      return {
        redirect: {
          destination: "/profile",
          permanent: false,
        },
      };
    }
  }

  return {
    props: {
      // initialSession: session,
      // session,
    },
  };
};
