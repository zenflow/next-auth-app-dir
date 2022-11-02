import { SessionDisplayServer } from "./SessionDisplayServer";
import { SessionDisplayClient } from "./SessionDisplayClient";

// TODO why doesn't this work? (here or in layout.tsx) - https://github.com/vercel/next.js/issues/42546
// export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";

export default function SessionDisplay() {
  return (
    <div>
      <h1>Session Display</h1>
      <SessionDisplayServer />
      <SessionDisplayClient />
    </div>
  );
}
