import { Login } from "./Login";
import { Logout } from "./Logout";
import type { OutletContext } from "../../types";

function Navbar({ session, supabase }: OutletContext) {
  return (
    <div className="px-4 flex items-center justify-between py-2 shadow-sm ">
      <p className="text-lg font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Remix Template
      </p>
      {!session?.user ? (
        <Login supabase={supabase} />
      ) : (
        <Logout supabase={supabase} />
      )}
    </div>
  );
}

export default Navbar;
