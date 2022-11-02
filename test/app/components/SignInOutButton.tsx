"use client";

import { signIn, signOut } from "next-auth/react";
import { useSession } from "../../..";

export const SignInOutButton: React.FC<{}> = () => {
  const session = useSession();
  return (
    <button onClick={() => (session ? signOut() : signIn())}>
      {session ? "Sign Out" : "Sign In"}
    </button>
  );
};
