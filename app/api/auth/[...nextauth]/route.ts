import NextAuth, { DefaultUser, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "API Login",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch("https://api.dev.compratoday.com/Auth/SignIn", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await res.json();
        const session: DefaultUser = {
          name: user.user.firstName,
          email: user.user.email,
          image: "",
          id: "1234",
        };

        if (res.ok && user) {
          return session;
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
