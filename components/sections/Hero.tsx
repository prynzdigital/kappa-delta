// components/sections/Hero.tsx
// Homepage Hero section — per wireframes.md Page 1 Hero block.
// Min-height 100vh desktop / 80vh mobile. Gold H1, ghost CTAs.
// Hero image: chapter photo supplied by client (assets/hero.png).

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-start bg-brand-dark overflow-hidden"
      style={{ minHeight: 'min(100vh, 100svh)' }}
      aria-label="Homepage hero"
    >
      {/* Background hero photo — shift focus to the right (people + dragon statue side) */}
      <Image
        src="/images/hero-image.png"
        alt="Kappa Delta Chapter members walking on UAB campus near the Blazer dragon statue"
        fill
        className="object-cover object-[70%_center] md:object-[60%_center] z-0"
        priority
        quality={90}
      />
      {/* Left-to-right overlay: nearly opaque on left (covers image's own text, makes HTML text pop),
          fades out on the right so the photo (men + dragon) shows through cleanly */}
      <div
        className="absolute inset-0 z-[1]"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to right, rgba(26,26,46,0.97) 0%, rgba(26,26,46,0.95) 35%, rgba(26,26,46,0.60) 58%, rgba(26,26,46,0.10) 80%, rgba(26,26,46,0.00) 100%)',
        }}
      />
      {/* Mobile: add bottom overlay so text stays legible on small screens */}
      <div
        className="absolute inset-0 z-[1] md:hidden"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to top, rgba(26,26,46,0.92) 0%, rgba(26,26,46,0.50) 50%, rgba(26,26,46,0.00) 100%)',
        }}
      />
      {/* Gold accent rule */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 bg-primary z-10"
        aria-hidden="true"
      />

      {/* Content — left column, max 46% on desktop so photo is fully visible on right */}
      <div className="relative z-10 w-full max-w-container mx-auto px-6 lg:px-20 py-24 md:py-36">
        <div className="w-full max-w-[520px] lg:max-w-[46%]">

          {/* Frosted glass eyebrow pill */}
          <div className="inline-flex items-center mb-5">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-body font-semibold tracking-[0.12em] uppercase text-primary"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(204, 168, 40, 0.45)',
                boxShadow: '0 2px 12px rgba(204, 168, 40, 0.12)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0" aria-hidden="true" />
              Kappa Delta Chapter · Founded 1971
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-display font-black text-white leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(38px, 5.5vw, 64px)' }}
          >
            Omega Psi Phi at UAB —{' '}
            <span className="text-primary">Where Brotherhood Began.</span>
          </h1>

          {/* Subhead */}
          <p className="font-body text-base md:text-lg text-white/85 mb-10 leading-[1.7] max-w-[440px]">
            The Kappa Delta Chapter has shaped Black Greek life at UAB since 1971. The foundation is here. Your place in it starts now.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-[48px] px-7 rounded-md bg-primary text-brand-dark text-sm font-body font-bold tracking-[0.05em] uppercase transition-all duration-150 hover:bg-primary-hover active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Express Interest
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-md border border-white/40 text-sm font-body font-semibold text-white hover:border-primary hover:text-primary transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Upcoming Events
            </Link>
            <Link
              href="/network"
              className="inline-flex items-center justify-center min-h-[48px] px-6 text-sm font-body font-semibold text-white/70 hover:text-primary transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
            >
              Alumni Network →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
