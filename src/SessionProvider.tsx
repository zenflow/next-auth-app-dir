import React from "react";
import type { SessionProviderProps as BaseSessionProviderProps } from "next-auth/react";
import { ClientSessionProvider } from "./internal/ClientSessionProvider";
import { useSession } from "./useSession";

export type SessionProviderProps = Omit<
  BaseSessionProviderProps,
  "session" | "baseUrl" | "basePath"
>;

export const SessionProvider: React.FC<SessionProviderProps> = (props) => {
  const session = useSession();
  return <ClientSessionProvider {...props} session={session} />;
};
