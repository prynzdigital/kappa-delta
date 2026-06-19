// app/gallery/page.tsx — Gallery (/gallery)
// Per metadata.md, wireframes.md Page 4, gallery.md.

import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import GalleryGrid from '@/components/sections/GalleryGrid';
import JsonLd from '@/components/layout/JsonLd';
import { buildImageGallerySchema, buildBreadcrumbSchema } from '@/lib/schema';
import { GALLERY_IMAGES, SOCIAL_LINKS } from '@/lib/constants';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gallery — Kappa Delta Chapter, Omega Psi Phi UAB',
  description:
    'Photos from chapter events, community service, and milestone celebrations. A visual history of brotherhood at Kappa Delta — Omega Psi Phi at UAB.',
  openGraph: {
    title: 'Gallery — Kappa Delta Chapter, Omega Psi Phi',
    description:
      'See the chapter in action. Events, milestones, and moments of brotherhood at UAB\'s first and founding Black Greek-letter organization.',
    url: 'https://[DOMAIN]/gallery',
    images: [{ url: '/og/gallery.jpg', width: 1200, height: 630, alt: 'Kappa Delta Chapter gallery' }],
  },
  alternates: { canonical: 'https://[DOMAIN]/gallery' },
};

const schemas = [
  buildImageGallerySchema({
    name: 'Kappa Delta Chapter Photo Gallery — Omega Psi Phi at UAB',
    description: 'Photos from chapter events, community service, and milestone celebrations.',
    url: '/gallery',
  }),
  buildBreadcrumbSchema([{ name: 'Gallery', url: '/gallery' }]),
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={schemas} />

      <PageHero
        eyebrow="54 Years of Brotherhood"
        headline="Brotherhood in Photos"
        subhead="Every photo on this page is a chapter of our story — the moments, the milestones, and the men who made them."
        size="compact"
      />

      {/* Intro copy */}
      <section className="bg-surface py-10" aria-label="Gallery introduction">
        <div className="max-w-[640px] mx-auto px-5 text-center">
          <p className="text-body font-body text-text leading-[1.6]">
            The Kappa Delta Chapter of Omega Psi Phi has been at UAB since 1971. These photos are not just records of events — they are evidence of a brotherhood that shows up: at campus milestones, community service days, chapter celebrations, and the quiet moments in between. We are proud of every one of them.
          </p>
          {/* TODO: [NEEDS CLIENT INPUT] — All gallery photo assets from the WordPress site and any
              additional photos not currently on the site. Confirm which photos should NOT be migrated. */}
        </div>
      </section>

      {/* Sub-gallery navigation */}
      <section className="bg-surface py-4" aria-label="Gallery categories">
        <div className="max-w-container mx-auto px-5 lg:px-[80px]">
          <div className="flex items-center gap-3 overflow-x-auto pb-2" role="list" aria-label="Gallery categories">
            <span
              className="shrink-0 inline-flex items-center justify-center min-h-[40px] px-4 rounded-md bg-primary text-text-on-gold text-label font-body font-semibold tracking-[0.04em]"
              aria-current="true"
            >
              All Photos
            </span>
            <Link
              href="/gallery/46th-anniversary"
              className="shrink-0 inline-flex items-center justify-center min-h-[40px] px-4 rounded-md border-2 border-brand-dark text-brand-dark text-label font-body font-semibold tracking-[0.04em] hover:bg-brand-dark hover:text-text-on-dark transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              46th Anniversary
            </Link>
            {/* TODO: [NEEDS CLIENT INPUT] — Additional gallery sub-categories beyond 46th Anniversary. */}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="bg-surface py-8 pb-24" aria-label="Chapter photo gallery">
        <div className="max-w-container mx-auto px-5 lg:px-[80px]">
          {/* TODO: [NEEDS CLIENT INPUT] — Replace placeholder images with real chapter photos.
              See gallery.md §Image Alt-Text Naming Convention for alt text and file naming requirements. */}
          <GalleryGrid images={GALLERY_IMAGES} />

          {/* Gallery footer */}
          <div className="mt-12 text-center flex flex-col items-center gap-4">
            <p className="text-body font-body text-text-muted">
              More photos are added as events happen. Follow us on social media to see the chapter in real time.
            </p>
            {/* TODO: [NEEDS CLIENT INPUT] — Social media handles for these icon links. */}
            <div className="flex items-center gap-4" aria-label="Social media links">
              <a href={SOCIAL_LINKS.instagram.url} target="_blank" rel="noopener noreferrer"
                aria-label={`Instagram: ${SOCIAL_LINKS.instagram.handle}`}
                className="flex items-center justify-center w-11 h-11 text-text hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm">
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a href={SOCIAL_LINKS.facebook.url} target="_blank" rel="noopener noreferrer"
                aria-label={`Facebook: ${SOCIAL_LINKS.facebook.handle}`}
                className="flex items-center justify-center w-11 h-11 text-text hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm">
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a href={SOCIAL_LINKS.twitter.url} target="_blank" rel="noopener noreferrer"
                aria-label={`Twitter/X: ${SOCIAL_LINKS.twitter.handle}`}
                className="flex items-center justify-center w-11 h-11 text-text hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm">
                <Twitter size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
