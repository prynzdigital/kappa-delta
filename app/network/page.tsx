// app/network/page.tsx — Alumni Network (/network)
// GATED PAGE — noindex, nofollow per metadata.md.
// Per wireframes.md Page 7A (gate state) and 7B (authenticated state).
// Authentication: NextAuth.js v4 with Google OAuth.
// Required env vars: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, NEXTAUTH_SECRET, NEXTAUTH_URL

import { getServerSession } from '@/lib/auth';
import NetworkPortal from './NetworkPortal';
import NetworkGate from './NetworkGate';

// Network page is a Server Component — session check happens server-side.
export default async function NetworkPage() {
  const session = await getServerSession();

  if (session) {
    return <NetworkPortal />;
  }

  return <NetworkGate />;
}
