import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { Users } from "@repo/db"
import { connectToDatabase } from "../../../utils/database";
import CredentialsProvider from 'next-auth/providers/credentials';

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const config = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      id: "credentials",
      name: 'my-project',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'jsmith@example.com',
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };


        try {
          await connectToDatabase();

          // check if user already exists
          let userExists = await Users.findOne({ email: payload.email });

          // if not, create a new document and save user in MongoDB
          if (!userExists) {
            userExists = await Users.create({
              email: payload.email,
              username: payload.email.split("@")[0],
              image: null,
            });
          }
          console.log("userExists credentials: ", userExists);

          return userExists
        } catch (error: any) {
          console.log("Error checking if user exists: ", error.message);
          throw new Error(error.message);
        }

        // const res = await fetch('https://cloudcoders.azurewebsites.net/api/tokens', {
        //   method: 'POST',
        //   body: JSON.stringify(payload),
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // });
        //
        // const user = await res.json();
        // if (!res.ok) {
        //   throw new Error(user.message);
        // }
        // // If no error and we have user data, return it
        // if (res.ok && user) {
        //   return user;
        // }
        //
        // // Return null if user data could not be retrieved
        // return null;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    })
  ],
  pages: {
    signIn: '/login',
  },
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
  },
  secret: process.env.NEXTAUTH_SECRET,
  // Enable debug messages in the console if you are having problems
  debug: process.env.NODE_ENV === 'development',
} satisfies NextAuthOptions

// Use it in server contexts
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, config)
}
