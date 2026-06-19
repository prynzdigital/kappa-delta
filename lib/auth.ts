// lib/auth.ts
// NextAuth configuration and server-side session helper.
// Authentication platform: Google OAuth via NextAuth.js v4.
// Environment variables required (set in Vercel — never in source):
//   GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, NEXTAUTH_SECRET, NEXTAUTH_URL

import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { getServerSession as _getServerSession } from 'next-auth/next';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  // Pages — use the gated network page itself as the sign-in destination.
  pages: {
    signIn: '/network',
  },
  // Session strategy: JWT (no database required for MVP).
  session: {
    strategy: 'jwt',
  },
};

/**
 * Server-side session helper — wraps getServerSession with the shared authOptions.
 * Use in Server Components and Route Handlers to check auth status.
 */
export function getServerSession() {
  return _getServerSession(authOptions);
}
