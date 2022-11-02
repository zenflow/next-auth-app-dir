import { useSession } from "../../../..";

export const SessionDisplayServer: React.FC<{}> = () => {
  const session = useSession();
  return (
    <div>
      <h2>server</h2>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};
