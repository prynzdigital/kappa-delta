// components/sections/PageHero.tsx
// Reusable interior page hero — dark background with eyebrow, H1, and subhead.
// Per wireframes.md: used on About, Lines, Gallery, Events, Gallery sub-pages.
// Contact page uses gold background variant (ContactHero).

import Image from 'next/image';

interface PageHeroProps {
  eyebrow: string;
  headline: string;
  subhead: string;
  /** Controls hero height. Defaults to 'standard' (400px desktop). */
  size?: 'standard' | 'compact' | 'medium';
  /** Show shield crest watermark */
  showCrest?: boolean;
}

const SIZE_CLASSES: Record<string, string> = {
  standard: 'py-24 md:py-32 min-h-[280px] md:min-h-[400px]',
  medium: 'py-16 md:py-24 min-h-[220px] md:min-h-[320px]',
  compact: 'py-12 md:py-16 min-h-[200px] md:min-h-[280px]',
};

export default function PageHero({
  eyebrow,
  headline,
  subhead,
  size = 'standard',
  showCrest = true,
}: PageHeroProps) {
  return (
    <section className={`relative bg-brand-dark overflow-hidden flex items-center ${SIZE_CLASSES[size]}`}>
      {/* Shield crest watermark */}
      {showCrest && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <Image
            src="/images/shield-crest.svg"
            alt=""
            width={200}
            height={240}
            className="opacity-[0.04] select-none"
          />
        </div>
      )}

      <div className="relative z-10 max-w-container mx-auto px-5 lg:px-[80px] w-full">
        <p className="text-eyebrow font-body text-primary mb-4" aria-hidden="true">
          {eyebrow}
        </p>
        <h1 className="text-h1-mobile md:text-h1 font-display font-bold text-text-on-dark leading-[1.1] mb-4 max-w-3xl">
          {headline}
        </h1>
        <p className="text-body-lg-mobile md:text-body-lg font-body text-text-on-dark leading-[1.65] max-w-2xl">
          {subhead}
        </p>
      </div>
    </section>
  );
}

/** Gold-background hero for the Contact page */
export function ContactHero() {
  return (
    <section className="relative bg-primary overflow-hidden flex items-center py-20 md:py-28 min-h-[240px] md:min-h-[320px]">
      <div className="max-w-container mx-auto px-5 lg:px-[80px] w-full">
        <p className="text-eyebrow font-body text-text-on-gold mb-4" aria-hidden="true">
          Take the First Step
        </p>
        <h1 className="text-h1-mobile md:text-h1 font-display font-bold text-text-on-gold leading-[1.1] mb-4 max-w-3xl">
          Interested in Brotherhood? We&rsquo;d Love to Hear From You.
        </h1>
        <p className="text-body-lg-mobile md:text-body-lg font-body text-text-on-gold leading-[1.65] max-w-2xl">
          Whether you&rsquo;re a prospective member ready to explore Kappa Delta or simply have questions about the chapter, this is the right place to start.
        </p>
      </div>
    </section>
  );
}
