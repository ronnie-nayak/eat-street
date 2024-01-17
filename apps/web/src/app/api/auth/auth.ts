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
        email: { label: "Email", type: "email", placeholder: "Click submit for guest user" },
      },
      async authorize(credentials) {



        await connectToDatabase();
        const userExists = await Users.findOne({ email: credentials?.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          return await Users.create({
            email: credentials?.email,
            name: "Guest User",
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
      const sessionUsers = await Users.findOne({ email: session?.user?.email, name: session?.user?.name, image: session?.user?.image });
      session!.user!.id = sessionUsers._id.toString();

      return session;
    },
    async signIn({ profile, user }) {
      try {


        await connectToDatabase();
        // check if user already exists
        const userExists = await Users.findOne({ email: user?.email, name: user?.name, image: user?.image });
        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await Users.create({
            image: user?.image,
            email: user?.email,
            name: user?.name,
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
