// app/network/layout.tsx
// Network page layout — provides noindex metadata for the gated portal.
// Per metadata.md §Network: noindex, nofollow — must not appear in sitemap.

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alumni Network — Kappa Delta, Omega Psi Phi',
  description:
    'An exclusive space for initiated Kappa Delta brothers to reconnect, access the alumni directory, and stay in touch with the chapter at UAB.',
  openGraph: {
    title: 'Alumni Network — Kappa Delta Chapter, ΩΨΦ',
    description:
      'Initiated brothers: log in to reconnect with your Kappa Delta family, find alumni in your area, and stay connected to the chapter at UAB.',
    url: 'https://[DOMAIN]/network',
    images: [{ url: '/og/network.jpg', width: 1200, height: 630, alt: 'Kappa Delta Alumni Network' }],
  },
  // noindex, nofollow — gated page per seo-strategy.md §7 and metadata.md §Network
  robots: {
    index: false,
    follow: false,
  },
  alternates: { canonical: 'https://[DOMAIN]/network' },
};

export default function NetworkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
