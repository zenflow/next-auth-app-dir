"use client";

import { useSession } from "../../../..";

export const SessionDisplayClient: React.FC<{}> = () => {
  const session = useSession();
  return (
    <div>
      <h2>client</h2>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};
