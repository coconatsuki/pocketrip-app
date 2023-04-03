import Account from "./components/account";
import { useSession } from "@supabase/auth-helpers-react";

export default function Home() {
  const session = useSession();

  return <Account session={session} />;
}
