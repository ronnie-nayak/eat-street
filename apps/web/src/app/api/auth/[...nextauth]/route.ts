import NextAuth from "next-auth";
import { config } from "../auth";

const handler: any = NextAuth(config);

export { handler as GET, handler as POST };
