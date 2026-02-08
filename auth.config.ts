import GitHub from 'next-auth/providers/github';
import type { NextAuthConfig } from 'next-auth';

export default {
  providers: [GitHub],
  callbacks: {
    jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    session({ session, token }) {
      if (session.user) session.user.id = token.id as string;
      return session;
    },
  },
} satisfies NextAuthConfig;
