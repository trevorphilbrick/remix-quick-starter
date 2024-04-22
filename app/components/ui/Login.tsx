import { Button } from "./button";
import type { SupabaseClient } from "@supabase/auth-helpers-remix";

export const Login = ({ supabase }: { supabase: SupabaseClient }) => {
  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return <Button onClick={handleLogin}>Login</Button>;
};
