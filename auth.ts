import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import {prisma} from "@/lib/prisma"
import GitHub from "next-auth/providers/github"

export const {handlers, auth, signIn, signOut} = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [GitHub],
    callbacks: {
        session({session, user}) {
            if (session.user) {
                session.user.id = user.id;
            }
            return session;
        }
    }
})