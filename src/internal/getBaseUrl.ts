const defaultOrigin = "http://127.0.0.1:3000";
const defaultPathname = "/api/auth";

let baseUrl = "";

export function getBaseUrl(): string {
  if (typeof process === "undefined") {
    throw new Error("getBaseUrl should only be called server-side");
  }
  if (baseUrl) {
    return baseUrl;
  }
  let { origin, pathname } = new URL(
    process.env.NEXTAUTH_URL_INTERNAL ??
      process.env.NEXTAUTH_URL ??
      process.env.VERCEL_URL ??
      `${defaultOrigin}${defaultPathname}`
  );
  pathname = pathname.replace(/\/$/, ""); // remove trailing slash
  pathname ||= defaultPathname; // env var may provide origin but not pathname
  baseUrl = `${origin}${pathname}`;
  return baseUrl;
}
