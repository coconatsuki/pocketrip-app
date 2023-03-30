import { Auth } from "@supabase/auth-ui-react";
import HeaderLoginMobile from "./components/headerLoginMobile";
import { supabase } from "./../lib/supabaseClient";

import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function Login() {
  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "example@email.com",
      password: "example-password",
    });

    async function signOut() {
      const { error } = await supabase.auth.signOut();
    }

    return (
      <>
        <HeaderLoginMobile />
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
        ></Auth>
      </>
    );
  }
}
