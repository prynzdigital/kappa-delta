'use client';

// components/layout/Providers.tsx
// Client-side providers wrapper — wraps app in NextAuth SessionProvider.
// SessionProvider enables next-auth/react hooks (signIn, signOut, useSession)
// in client components throughout the application.

import { SessionProvider } from 'next-auth/react';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
