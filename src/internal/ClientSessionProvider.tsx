"use client";
/**
 * This module exists for the sole purpose of cloning SessionProvider
 * and adding the compiler directive above.
 */

import React from "react";
import { SessionProvider } from "next-auth/react";

export const ClientSessionProvider: typeof SessionProvider = (props) => {
  return <SessionProvider {...props} />;
};
