// components/sections/ValueProps.tsx
// Homepage Value Props — 6 image cards, minimal copy + CTA each.

import Image from 'next/image';
import Link from 'next/link';

const VALUE_PROPS = [
  {
    id: 'vp-first',
    image: '/images/first.png',
    imageAlt: 'The first BGLO founded and chartered at UAB',
    headline: 'The First — and Still Standing',
    body: 'Founded and chartered at UAB in 1971 — no other fraternity can claim that distinction.',
    cta: { label: 'Our History', href: '/about' },
  },
  {
    id: 'vp-brotherhood',
    image: '/images/brotherhood.png',
    imageAlt: 'Brothers of Kappa Delta Chapter at UAB',
    headline: 'Brotherhood That Spans Generations',
    body: 'From student leaders to doctors, lawyers, and executives — our bonds last a lifetime.',
    cta: { label: 'Meet the Brothers', href: '/lines' },
  },
  {
    id: 'vp-legacy',
    image: '/images/legacy.png',
    imageAlt: 'Kappa Delta Chapter campus monument at UAB',
    headline: 'A Legacy You Can Stand On',
    body: 'We have a monument on campus to prove it. Not a footnote — a foundation.',
    cta: { label: 'See Our Legacy', href: '/about' },
  },
  {
    id: 'vp-service',
    image: '/images/hero-image.png',
    imageAlt: 'Chapter members serving the community',
    headline: 'Service Above Self',
    body: 'Six National Mandated Programs guide every chapter initiative — from scholarship to community uplift.',
    cta: { label: 'Our Programs', href: '/events' },
  },
  {
    id: 'vp-scholarship',
    image: '/images/hero1.png',
    imageAlt: 'Kappa Delta scholars at UAB',
    headline: 'Excellence in Scholarship',
    body: 'We hold our men to a higher standard — academically, professionally, and personally.',
    cta: { label: 'Get Involved', href: '/contact' },
  },
  {
    id: 'vp-network',
    image: '/images/hero.png',
    imageAlt: 'Kappa Delta alumni network',
    headline: 'A Network That Opens Doors',
    body: 'Kappa Delta alumni are in every industry. Your next mentor, partner, or employer may already be a brother.',
    cta: { label: 'Alumni Network', href: '/network' },
  },
];

export default function ValueProps() {
  return (
    <section className="bg-surface py-16 md:py-24" aria-label="Why Kappa Delta">
      <div className="max-w-container mx-auto px-5 lg:px-[80px]">

        {/* Section header — matches BentoGallery style */}
        <div className="flex flex-col items-center text-center gap-3 mb-8 md:mb-10">
          <div className="flex items-center gap-3">
            <span className="block h-px w-10 bg-brand-dark opacity-40" aria-hidden="true" />
            <span className="font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-dark/60">
              Why Kappa Delta
            </span>
            <span className="block h-px w-10 bg-brand-dark opacity-40" aria-hidden="true" />
          </div>
          <h2
            className="font-display font-black text-brand-dark leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            The Brotherhood That{' '}
            <span className="text-primary">Chose You First</span>
          </h2>
        </div>

        {/* Cards grid — 2 cols on md, 3 on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUE_PROPS.map((vp) => (
            <div
              key={vp.id}
              className="group bg-surface-alt rounded-lg overflow-hidden shadow-card-brand hover:shadow-card-brand-hover transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={vp.image}
                  alt={vp.imageAlt}
                  fill
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary z-10" aria-hidden="true" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2.5 p-5 flex-1">
                <h2 className="font-display font-bold text-brand-dark text-[17px] leading-snug">
                  {vp.headline}
                </h2>
                <p className="font-body text-sm text-text-muted leading-[1.6] flex-1">
                  {vp.body}
                </p>
                <Link
                  href={vp.cta.href}
                  className="mt-1 inline-flex items-center gap-1 text-sm font-body font-semibold text-primary hover:text-primary-hover transition-colors duration-150 focus-visible:outline-none focus-visible:underline"
                >
                  {vp.cta.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
