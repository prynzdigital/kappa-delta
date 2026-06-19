// app/layout.tsx
// Root layout — Header, Footer, fonts, global metadata, sitewide Organization JSON-LD.
// Playfair Display (headings, weights 700+900) + Inter (body, weights 400+500+600).

import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import SkipNav from '@/components/layout/SkipNav';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/layout/JsonLd';
import Providers from '@/components/layout/Providers';
import { buildOrganizationSchema } from '@/lib/schema';

// Load fonts via next/font/google — font-display: swap included by default.
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

// Global / fallback metadata — per-page metadata overrides these in each page.tsx.
// metadataBase uses a placeholder URL. Replace with the real domain at launch.
// TODO: Replace NEXT_PUBLIC_SITE_URL env var (or the fallback below) with the real domain at launch.
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kdques.org'),
  title: {
    default: 'Omega Psi Phi at UAB — Kappa Delta Chapter',
    template: '%s | Kappa Delta Chapter, Omega Psi Phi',
  },
  description:
    'The Kappa Delta Chapter of Omega Psi Phi has shaped UAB history since 1971. Learn about our brotherhood and take the first step toward membership.',
  openGraph: {
    siteName: 'Kappa Delta Chapter of Omega Psi Phi Fraternity, Inc.',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og/home.png',
        width: 1200,
        height: 630,
        alt: 'Kappa Delta Chapter of Omega Psi Phi — UAB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = buildOrganizationSchema();

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <JsonLd data={orgSchema} />
      </head>
      <body>
        <Providers>
          <SkipNav />
          <Header />
          {/* Main content offset for fixed header (72px) */}
          <div style={{ paddingTop: '72px' }}>
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
