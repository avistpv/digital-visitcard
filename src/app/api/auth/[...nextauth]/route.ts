import clientPromise from "@/lib/db"
import NextAuth from "next-auth";
import {MongoDBAdapter} from "@auth/mongodb-adapter";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        })
    ]
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };