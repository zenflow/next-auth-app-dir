import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: 'Password (enter "password")', type: "text" },
      },
      async authorize(credentials) {
        const { email, password } = credentials!;
        return password === "password" ? { id: email, email } : null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
});

const handlerWithLogging = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(
    new Date().toISOString(),
    req.headers["user-agent"] === "undici" ? "server" : "client",
    req.url
  );
  return handler(req, res);
};

// export default handler
export default handlerWithLogging;
