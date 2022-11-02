import React from "react";

let context = null;
try {
  context = React.createContext(null);
} catch (error) {}

/**
 * This is a bit of a hack but I'll be thrilled if it breaks,
 * i.e. if Server Components get support for [regular] Context.
 */
export const isServerComponent = !context;
