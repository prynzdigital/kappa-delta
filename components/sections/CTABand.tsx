// components/sections/CTABand.tsx
// Reusable CTA Band — used for Recruitment CTA and Alumni CTA on homepage,
// and equivalent CTA bands on About and other pages.
// Per wireframes.md: gold band (recruitment) or dark band (alumni).

import Link from 'next/link';

// ---- Recruitment CTA Band ----
// Gold background, inverted dark button, centered.
export function RecruitmentCTABand() {
  return (
    <section
      className="bg-primary py-16 md:py-24"
      aria-label="Join the brotherhood"
    >
      <div className="max-w-container mx-auto px-5 lg:px-[80px] text-center flex flex-col items-center gap-6">
        <h2 className="text-h2-mobile md:text-h2 font-display font-bold text-text-on-gold leading-[1.15] max-w-2xl">
          Ready to Take Your Place in This Brotherhood?
        </h2>
        <p className="text-body-lg font-body text-text-on-gold max-w-xl leading-[1.65]">
          If you&rsquo;re a UAB undergraduate man who wants to be part of something built to last, we want to hear from you.
        </p>
        {/* Inverted button on gold background: dark bg, light text — per design-system.md wireframes note */}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center min-h-[44px] px-8 rounded-md bg-brand-dark text-text-on-dark text-label font-body font-semibold tracking-[0.04em] transition-all duration-150 hover:bg-brand-dark-hover active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
          Express Interest
        </Link>
      </div>
    </section>
  );
}

// ---- Alumni CTA Band ----
// Dark background, two secondary-style buttons side-by-side (stacked on mobile).
export function AlumniCTABand() {
  return (
    <section
      className="bg-brand-dark py-16 md:py-24"
      aria-label="Alumni reconnection"
    >
      <div className="max-w-container mx-auto px-5 lg:px-[80px]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Text */}
          <div className="flex flex-col gap-4 max-w-xl">
            <h2 className="text-h2-mobile md:text-h2 font-display font-bold text-primary leading-[1.15]">
              Already a Brother? Welcome Home.
            </h2>
            <p className="text-body font-body text-text-on-dark leading-[1.6]">
              Kappa Delta Alumni — your brotherhood does not expire. Stay connected, attend events, and access the exclusive alumni Network portal to reconnect with brothers across the years.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 w-full md:w-auto shrink-0">
            <Link
              href="/events"
              className="inline-flex items-center justify-center min-h-[44px] px-8 rounded-md border-2 border-text-on-dark text-text-on-dark text-label font-body font-semibold tracking-[0.04em] transition-all duration-150 hover:bg-text-on-dark hover:text-brand-dark active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark w-full md:w-auto"
            >
              View Events
            </Link>
            <Link
              href="/network"
              className="inline-flex items-center justify-center min-h-[44px] px-8 rounded-md border-2 border-text-on-dark text-text-on-dark text-label font-body font-semibold tracking-[0.04em] transition-all duration-150 hover:bg-text-on-dark hover:text-brand-dark active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark w-full md:w-auto"
            >
              Alumni Network
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- About Page CTA Band ----
// Gold background with inverted button + ghost link.
export function AboutCTABand() {
  return (
    <section
      className="bg-primary py-16 md:py-24"
      aria-label="Express interest in the chapter"
    >
      <div className="max-w-container mx-auto px-5 lg:px-[80px] text-center flex flex-col items-center gap-6">
        <h2 className="text-h2-mobile md:text-h2 font-display font-bold text-text-on-gold leading-[1.15] max-w-2xl">
          The Story Doesn&rsquo;t Stop — Your Chapter Awaits You.
        </h2>
        <p className="text-body font-body text-text-on-gold max-w-xl leading-[1.6]">
          If you&rsquo;re a UAB undergraduate man ready to be part of this history, the next step is simple.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center min-h-[44px] px-8 rounded-md bg-brand-dark text-text-on-dark text-label font-body font-semibold tracking-[0.04em] transition-all duration-150 hover:bg-brand-dark-hover active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Express Interest
          </Link>
          <Link
            href="/lines"
            className="inline-flex items-center justify-center min-h-[44px] px-5 text-label font-body font-semibold text-text-on-gold hover:underline hover:text-brand-dark transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
          >
            Meet the Brothers — View Our Lines &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
