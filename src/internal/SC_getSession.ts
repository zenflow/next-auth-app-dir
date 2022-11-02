import { Session } from "next-auth";
import { headers } from "next/headers";
import { getBaseUrl } from "./getBaseUrl";

export async function SC_getSession(): Promise<Session | null> {
  const cookie = headers().get("cookie");
  const res = await fetch(`${getBaseUrl()}/session`, {
    headers: cookie ? { cookie } : {},
    // cache: "no-store", // TODO why doesn't this work? - https://github.com/vercel/next.js/issues/42546
  });
  const session = await res.json();
  return session.user ? (session as Session) : null;
}
