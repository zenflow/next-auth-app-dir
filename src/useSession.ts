import { use } from "react";
import type { Session } from "next-auth";
import { useSession as CC_useSession } from "next-auth/react";
import { isServerComponent } from "./internal/isServerComponent";
import { SC_getSession } from "./internal/SC_getSession";

export function useSession(): Session | null {
  return isServerComponent ? use(SC_getSession()) : CC_useSession().data;
}
