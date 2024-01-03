import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDatabase } from "../../../utils/database";
import { Users } from "@repo/db"

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const config = {
  providers: [
    GoogleProvider({
      clientId: process?.env?.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process?.env?.GOOGLE_CLIENT_SECRET ?? "",
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
        await connectToDatabase();

        // check if user already exists
        const userExists = await Users.findOne({ email: profile?.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await Users.create({
            email: profile?.email,
            username: profile?.name?.replace(" ", "").toLowerCase(),
            image: user?.image,
          });
        }

        return true
      } catch (error: any) {
        console.log("Error checking if user exists: ", error.message);
        return false
      }
    },
  }
} satisfies NextAuthOptions

// Use it in server contexts
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, config)
}
