// components/sections/HistoryTeaser.tsx
// Homepage History/Legacy Teaser — per wireframes.md Page 1 HISTORY / LEGACY TEASER block.
// Content verbatim from homepage.md §History / Legacy Teaser.
// 2-column desktop (image left / text right), stacked mobile.

import Link from 'next/link';
import Image from 'next/image';

export default function HistoryTeaser() {
  return (
    <section className="bg-surface py-16 md:py-24" aria-label="Chapter history">
      <div className="max-w-container mx-auto px-5 lg:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Emblem — direct, no card treatment */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/emblem.png"
              alt="Omega Psi Phi Fraternity, Inc. — Kappa Delta Chapter emblem"
              width={480}
              height={480}
              className="w-full max-w-[420px] md:max-w-full h-auto object-contain"
              sizes="(max-width: 768px) 80vw, 50vw"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            {/* aria-hidden: decorative eyebrow; color brand-dark for WCAG AA contrast on light surface (#004 fix) */}
            <p className="text-eyebrow font-body text-brand-dark" aria-hidden="true">
              54 Years of History
            </p>
            <h2 className="text-h2-mobile md:text-h2 font-display font-bold text-text leading-[1.15]">
              Founded in 1971. Still Here. Still Building.
            </h2>
            <div className="text-body font-body text-text leading-[1.6] flex flex-col gap-4">
              <p>
                On November 17, 1971, eight men at the University of Alabama at Birmingham chose to create something that had never existed on this campus. They called themselves the Revolutionary Eight, and on May 19, 1972, the Kappa Delta Chapter of Omega Psi Phi Fraternity, Inc. became officially chartered — the first Black Greek-letter organization in UAB history.
              </p>
              <p>
                Fifty-four years later, that decision still echoes across every corner of this campus.
              </p>
            </div>
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-label font-body font-semibold text-brand-dark hover:text-primary-hover hover:underline transition-colors duration-150 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
              >
                Read Our Full History &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
