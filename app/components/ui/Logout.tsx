import { Button } from "./button";
import type { SupabaseClient } from "@supabase/auth-helpers-remix";

export const Logout = ({ supabase }: { supabase: SupabaseClient }) => {
  const handleLogout = () => {
    supabase.auth.signOut();
  };

  return <Button onClick={handleLogout}>log out</Button>;
};
