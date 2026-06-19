'use client';
// components/sections/BentoGallery.tsx
// Bento-grid photo gallery + infinite auto-scrolling strip.
// Sits between Hero and ValueProps on the homepage.

import Image from 'next/image';

const BENTO_ITEMS = [
  {
    id: 'b-hero',
    src: '/images/hero-image.png',
    alt: 'Kappa Delta Chapter members walking on UAB campus',
    label: 'Brotherhood',
    caption: 'Walking the Legacy',
    span: 'large', // left large cell
  },
  {
    id: 'b-brotherhood',
    src: '/images/brotherhood.png',
    alt: 'Brothers of Kappa Delta Chapter',
    label: 'Members',
    caption: 'Our Brothers',
    span: 'small',
  },
  {
    id: 'b-first',
    src: '/images/first.png',
    alt: 'The First — Kappa Delta Chapter at UAB',
    label: 'History',
    caption: 'The First at UAB',
    span: 'small',
  },
  {
    id: 'b-legacy',
    src: '/images/legacy.png',
    alt: 'Kappa Delta Chapter campus legacy',
    label: 'Legacy',
    caption: 'Campus Legacy',
    span: 'small',
  },
  {
    id: 'b-hero1',
    src: '/images/hero1.png',
    alt: 'Kappa Delta Chapter event',
    label: 'Events',
    caption: 'Chapter Events',
    span: 'small',
  },
];

const STATS = [
  { value: '54', suffix: '+', label: 'Years of History' },
  { value: '8', suffix: '', label: 'Founding Members' },
  { value: '1', suffix: '', label: 'Campus Monument' },
  { value: '50', suffix: '+', label: 'Years of Service' },
];

// All images for the scrolling strip — duplicated for seamless loop
const STRIP_IMAGES = [
  { src: '/images/hero-image.png', alt: 'Chapter members on campus' },
  { src: '/images/brotherhood.png', alt: 'Brotherhood' },
  { src: '/images/first.png', alt: 'The First at UAB' },
  { src: '/images/legacy.png', alt: 'Chapter legacy' },
  { src: '/images/hero1.png', alt: 'Chapter event' },
  { src: '/images/emblem.png', alt: 'Chapter emblem' },
  { src: '/images/hero.png', alt: 'Omega Psi Phi event' },
  // duplicated for seamless loop
  { src: '/images/hero-image.png', alt: 'Chapter members on campus' },
  { src: '/images/brotherhood.png', alt: 'Brotherhood' },
  { src: '/images/first.png', alt: 'The First at UAB' },
  { src: '/images/legacy.png', alt: 'Chapter legacy' },
  { src: '/images/hero1.png', alt: 'Chapter event' },
  { src: '/images/emblem.png', alt: 'Chapter emblem' },
  { src: '/images/hero.png', alt: 'Omega Psi Phi event' },
];

const LABEL_STYLES: Record<string, string> = {
  Brotherhood: 'bg-primary/20 text-primary border border-primary/50',
  Members:     'bg-white/15 text-white border border-white/30',
  History:     'bg-brand-dark/60 text-primary border border-primary/40',
  Legacy:      'bg-white/15 text-white border border-white/30',
  Events:      'bg-primary/20 text-primary border border-primary/50',
};

export default function BentoGallery() {
  return (
    <section className="bg-brand-dark py-10 md:py-16" aria-label="Chapter photo gallery">
      <div className="max-w-container mx-auto px-5 lg:px-[80px]">

        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-3 mb-10">
          {/* Eyebrow with decorative lines */}
          <div className="flex items-center gap-3">
            <span className="block h-px w-10 bg-primary opacity-70" aria-hidden="true" />
            <span className="font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-primary">
              Our Chapter
            </span>
            <span className="block h-px w-10 bg-primary opacity-70" aria-hidden="true" />
          </div>
          {/* Heading */}
          <h2
            className="font-display font-black text-white leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            Brotherhood in{' '}
            <span className="text-primary">Every Frame</span>
          </h2>
          <p className="font-body text-white/55 text-sm md:text-base max-w-md leading-relaxed">
            From chapter walks to campus milestones — every photo is a chapter in the Kappa Delta story.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-[auto] gap-3">

          {/* LARGE CELL — left, spans 2 rows on md+ */}
          <div className="relative col-span-2 md:col-span-1 md:row-span-2 rounded-xl overflow-hidden h-[260px] md:h-auto group">
            <Image
              src="/images/hero-image.png"
              alt="Kappa Delta Chapter members walking on UAB campus"
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
            <span className="absolute top-3 left-3 z-10 text-[11px] font-body font-semibold px-2.5 py-1 rounded-full bg-primary/20 text-primary border border-primary/50 backdrop-blur-sm">
              ★ Brotherhood
            </span>
            <span className="absolute bottom-3 left-3 z-10 font-display font-bold text-white text-sm">
              Walking the Legacy
            </span>
          </div>

          {/* SMALL CELLS — 4 cells on md, 2 on mobile */}
          {BENTO_ITEMS.slice(1).map((item) => (
            <div key={item.id} className="relative rounded-xl overflow-hidden h-[130px] md:h-[160px] group">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/75 via-transparent to-transparent" />
              <span className={`absolute top-2 left-2 z-10 text-[10px] font-body font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm ${LABEL_STYLES[item.label] ?? 'bg-white/10 text-white border border-white/20'}`}>
                {item.label}
              </span>
              <span className="absolute bottom-2 left-2 z-10 font-body font-semibold text-white text-xs">
                {item.caption}
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* Full-width frosted stats bar — edge to edge */}
      <div
        className="w-full mt-6"
        style={{
          background: 'rgba(26,26,46,0.75)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderTop: '1px solid rgba(204,168,40,0.2)',
          borderBottom: '1px solid rgba(204,168,40,0.2)',
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center justify-center text-center py-5 px-4 ${
                // on mobile (2-col): border-r only on col 1 items (index 0 and 2)
                // on md+ (4-col): border-r on all except last
                i % 2 === 0 ? 'border-r border-white/10 md:border-r' : 'md:border-r md:border-white/10'
              } ${i === STATS.length - 1 ? 'md:border-r-0' : ''}`}
            >
              <span className="font-display font-black text-primary text-3xl md:text-4xl leading-none">
                {s.value}<span className="text-2xl">{s.suffix}</span>
              </span>
              <span className="font-body text-[11px] text-white/55 mt-1.5 uppercase tracking-widest leading-tight">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite auto-scrolling strip */}
      <div className="mt-6 overflow-hidden" aria-hidden="true">
        <div className="flex gap-3 animate-scroll-strip" style={{ width: 'max-content' }}>
          {STRIP_IMAGES.map((img, i) => (
            <div
              key={i}
              className="relative rounded-lg overflow-hidden flex-shrink-0"
              style={{ width: '180px', height: '120px' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="180px"
              />
              <div className="absolute inset-0 bg-brand-dark/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
