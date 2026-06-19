// app/page.tsx — Home (/)
// Per metadata.md, wireframes.md Page 1, homepage.md.

import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import BentoGallery from '@/components/sections/BentoGallery';
import ValueProps from '@/components/sections/ValueProps';
import HistoryTeaser from '@/components/sections/HistoryTeaser';
import EventsPreview from '@/components/sections/EventsPreview';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import { RecruitmentCTABand, AlumniCTABand } from '@/components/sections/CTABand';
import JsonLd from '@/components/layout/JsonLd';
import { buildWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Omega Psi Phi at UAB — Kappa Delta Chapter',
  description:
    'The Kappa Delta Chapter of Omega Psi Phi has shaped UAB history since 1971. Learn about our brotherhood and take the first step toward membership.',
  openGraph: {
    title: 'Omega Psi Phi at UAB — Kappa Delta Chapter',
    description:
      'The first Black Greek-letter organization founded and chartered at UAB. Discover 50+ years of brotherhood, scholarship, and legacy at Kappa Delta.',
    url: 'https://[DOMAIN]/',
    images: [{ url: '/og/home.png', width: 1200, height: 630, alt: 'Kappa Delta Chapter — Omega Psi Phi at UAB' }],
  },
  alternates: { canonical: 'https://[DOMAIN]/' },
};

const webPageSchema = buildWebPageSchema({
  url: '/',
  name: 'Omega Psi Phi at UAB — Kappa Delta Chapter',
  description:
    'The Kappa Delta Chapter of Omega Psi Phi has shaped UAB history since 1971. Learn about our brotherhood and take the first step toward membership.',
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <Hero />
      <BentoGallery />
      <ValueProps />
      <HistoryTeaser />
      <EventsPreview />
      <TestimonialsSection />
      <RecruitmentCTABand />
      <AlumniCTABand />
    </>
  );
}
