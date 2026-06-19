// app/gallery/46th-anniversary/page.tsx — 46th Anniversary sub-gallery
// Per metadata.md, wireframes.md Page 5, gallery.md §46th Chapter Anniversary Sub-Gallery.

import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import GalleryGrid from '@/components/sections/GalleryGrid';
import JsonLd from '@/components/layout/JsonLd';
import { buildImageGallerySchema, buildBreadcrumbSchema } from '@/lib/schema';
import { ANNIVERSARY_IMAGES, ANNIVERSARY_YEAR } from '@/lib/constants';
import { ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: '46th Anniversary — Kappa Delta, Omega Psi Phi',
  description:
    'Photos from the Kappa Delta Chapter 46th Anniversary. A milestone in 54 years of Omega Psi Phi brotherhood at the University of Alabama at Birmingham.',
  openGraph: {
    title: '46th Anniversary — Kappa Delta Chapter, ΩΨΦ',
    description:
      'Relive the 46th Anniversary of Kappa Delta Chapter of Omega Psi Phi at UAB — photos, memories, and the brothers who celebrated a milestone together.',
    url: 'https://[DOMAIN]/gallery/46th-anniversary',
    images: [{ url: '/og/gallery-46th.jpg', width: 1200, height: 630, alt: '46th Anniversary Kappa Delta' }],
  },
  alternates: { canonical: 'https://[DOMAIN]/gallery/46th-anniversary' },
};

const schemas = [
  buildImageGallerySchema({
    name: 'Kappa Delta Chapter 46th Anniversary Photo Gallery',
    description: 'Photos from the Kappa Delta Chapter 46th Anniversary celebration.',
    url: '/gallery/46th-anniversary',
  }),
  buildBreadcrumbSchema([
    { name: 'Gallery', url: '/gallery' },
    { name: '46th Anniversary', url: '/gallery/46th-anniversary' },
  ]),
];

export default function Anniversary46Page() {
  return (
    <>
      <JsonLd data={schemas} />

      {/* Back navigation — top */}
      <div className="bg-brand-dark pt-4 pb-2">
        <div className="max-w-container mx-auto px-5 lg:px-[80px]">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1 text-primary text-body-sm font-body font-semibold hover:underline min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-sm"
            aria-label="Back to Gallery"
          >
            <ChevronLeft size={16} aria-hidden="true" />
            Back to Gallery
          </Link>
        </div>
      </div>

      <PageHero
        eyebrow="A Milestone Moment"
        headline="Kappa Delta Chapter — 46th Anniversary"
        subhead={`In ${ANNIVERSARY_YEAR}, brothers past and present gathered to celebrate 46 years of brotherhood at the University of Alabama at Birmingham.`}
        size="medium"
      />

      {/* Sub-gallery intro */}
      <section className="bg-surface py-10" aria-label="46th Anniversary introduction">
        <div className="max-w-[640px] mx-auto px-5 text-center">
          <p className="text-body font-body text-text leading-[1.6]">
            The 46th Anniversary of the Kappa Delta Chapter brought together initiated brothers from across the years — a living demonstration of what 46 years of brotherhood looks like when it comes home. These photos capture that gathering: the handshakes, the pride, and the shared history that no calendar can contain.
          </p>
          {/* TODO: [NEEDS CLIENT INPUT] — Confirm year of 46th Anniversary. Any narrative details,
              keynote speakers, or notable moments from the event? */}
          {/* TODO: [NEEDS CLIENT INPUT] — 46th Anniversary photo assets — migrate from WordPress or supply separately. */}
        </div>
      </section>

      {/* Photo grid */}
      <section className="bg-surface py-8 pb-16" aria-label="46th Anniversary photo gallery">
        <div className="max-w-container mx-auto px-5 lg:px-[80px]">
          <GalleryGrid images={ANNIVERSARY_IMAGES} />
        </div>
      </section>

      {/* Back navigation — bottom */}
      <section className="bg-surface py-8 text-center">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-1 text-label font-body font-semibold text-brand-dark hover:text-primary-hover hover:underline transition-colors duration-150 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
          aria-label="Back to main gallery"
        >
          <ChevronLeft size={16} aria-hidden="true" />
          Back to Gallery
        </Link>
      </section>
    </>
  );
}
