import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
// import Head from "next/head";
import Account from "./components/account";
//import styles from "@/styles/Home.module.css";
// import Login from "./login";

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <Account session={session} />
        // <>
        //   <Head>
        //     <title>Pocketrip</title>
        //     <meta
        //       name="viewport"
        //       content="width=device-width, initial-scale=1"
        //     />
        //     <link rel="icon" href="/favicon.ico" />
        //   </Head>
        //   <main className="flex h-screen w-full">
        //     <h1>WELCOME</h1>
        //   </main>
        // </>
      )}
    </div>
  );
}
