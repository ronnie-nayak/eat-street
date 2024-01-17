import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { Users } from "@repo/db"
import { connectToDatabase } from "../../../utils/database";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const config = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@mail.com" },
      },
      async authorize(credentials) {


        console.log("credentials: ", credentials)
        console.log("credentials.email: ", credentials?.email)

        await connectToDatabase();
        const userExists = await Users.findOne({ email: credentials?.email });

        console.log("userExists: ", userExists)
        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          return await Users.create({
            email: credentials?.email,
            username: credentials?.email?.split("@")[0],
            image: "/login/user.svg"
          });
        }


        return userExists
      }
    })

  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUsers = await Users.findOne({ email: session?.user?.email });
      session!.user!.id = sessionUsers._id.toString();

      return session;
    },
    async signIn({ profile, user }) {
      try {
        console.log("profile: ", profile)
        console.log("user: ", user)


        await connectToDatabase();

        // check if user already exists
        const userExists = await Users.findOne({ email: user?.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await Users.create({
            email: user?.email,
            username: user?.name?.replace(" ", "").toLowerCase(),
            image: user?.image,
          });
        }

        return true
      } catch (error: any) {
        console.log("Error checking if user exists: ", error.message);
        return false
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  // session: {
  //   strategy: "jwt",
  // },
  // debug: process.env.NODE_ENV === "development",
} satisfies NextAuthOptions

// Use it in server contexts
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, config)
}
