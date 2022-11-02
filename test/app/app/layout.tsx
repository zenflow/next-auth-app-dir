import { SessionProvider } from "../../..";
import { SignInOutButton } from "../components/SignInOutButton";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>next-auth-app-dir test app</title>
      </head>
      <body>
        <SessionProvider>
          <nav>
            <SignInOutButton /> <Link href="/">Home</Link>{" "}
            <Link href="/session-display">Session Display</Link>
          </nav>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
