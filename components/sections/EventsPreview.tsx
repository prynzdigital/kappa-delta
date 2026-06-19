'use client';

// components/sections/EventsPreview.tsx
// Upcoming Chapter Events — horizontal carousel, frosted-glass image cards.
// Six National Mandated Programs of Omega Psi Phi Fraternity, Inc.

import { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';

const MANDATED_EVENTS = [
  {
    id: 'achievement-week',
    month: 'NOV',
    season: 'Annual · November',
    title: 'Achievement Week',
    description:
      'Our marquee annual program recognizing individuals who have made significant contributions to the community and campus — featuring awards banquets, panel discussions, and guest lectures.',
    image: '/images/hero-image.png',
    tag: 'Community',
  },
  {
    id: 'talent-hunt',
    month: 'APR',
    season: 'Annual · Spring',
    title: 'Talent Hunt Program',
    description:
      'Providing exposure and scholarships to high school students demonstrating exceptional talent in the performing arts, culminating in a competitive local showcase.',
    image: '/images/hero1.png',
    tag: 'Scholarship',
  },
  {
    id: 'blood-drive',
    month: 'JUN',
    season: 'Annual · Men\'s Health Month',
    title: 'Blood Drive & Health Initiatives',
    description:
      'In alignment with Charles R. Drew\'s legacy, the chapter coordinates campus blood drives with the American Red Cross and anchors Men\'s Health Month programming at UAB.',
    image: '/images/hero.png',
    tag: 'Health',
  },
  {
    id: 'scholarship',
    month: 'SPR',
    season: 'Annual · Spring Gala',
    title: 'College Endowment & Scholarship',
    description:
      'The chapter distributes scholarships to undergraduate students at UAB to reward academic excellence, funded through annual galas and golf classics.',
    image: '/images/hero-image.png',
    tag: 'Scholarship',
  },
  {
    id: 'social-action',
    month: 'DEC',
    season: 'Annual · Holiday Season',
    title: 'Social Action — Canned Food & Toy Drives',
    description:
      'An ongoing annual commitment to community uplift: holiday toy drives, Thanksgiving basket giveaways, and seasonal campus canned food collections serving the Birmingham community.',
    image: '/images/hero1.png',
    tag: 'Community',
  },
  {
    id: 'homecoming',
    month: 'OCT',
    season: 'Annual · Fall',
    title: 'Homecoming & NPHC Step Show',
    description:
      'A highlight of the UAB fall calendar — brothers take the stage at the NPHC Step Show and march in the UAB Homecoming Parade, displaying precision step and fraternity tradition.',
    image: '/images/hero.png',
    tag: 'Campus',
  },
];

const TAG_COLORS: Record<string, string> = {
  Community: 'bg-primary/20 text-primary border border-primary/40',
  Scholarship: 'bg-white/15 text-white border border-white/30',
  Health: 'bg-white/15 text-white border border-white/30',
  Campus: 'bg-primary/20 text-primary border border-primary/40',
};

export default function EventsPreview() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const CARD_WIDTH = 340; // px — card + gap approximation for scroll math
  const TOTAL = MANDATED_EVENTS.length;

  const scrollTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, TOTAL - 1));
    setActiveIndex(clamped);
    if (trackRef.current) {
      const card = trackRef.current.children[clamped] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [TOTAL]);

  const prev = () => scrollTo(activeIndex - 1);
  const next = () => scrollTo(activeIndex + 1);

  return (
    <section
      className="bg-brand-dark py-16 md:py-24 overflow-hidden"
      aria-label="Upcoming chapter events"
    >
      <div className="max-w-container mx-auto px-5 lg:px-[80px]">

        {/* Header row */}
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-eyebrow font-body text-primary tracking-[0.12em] uppercase mb-3">
              National Mandated Programs
            </p>
            <h2 className="text-h2-mobile md:text-h2 font-display font-bold text-white leading-tight">
              Upcoming Chapter Events
            </h2>
          </div>

          {/* Prev / Next */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              aria-label="Previous event"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors duration-150 disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              onClick={next}
              disabled={activeIndex === TOTAL - 1}
              aria-label="Next event"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors duration-150 disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>

      {/* Carousel track — bleeds to edge */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide pl-5 lg:pl-[max(80px,calc((100vw-1280px)/2+80px))] pr-5 pb-2"
        style={{ scrollSnapType: 'x mandatory' }}
        role="list"
        aria-label="Events carousel"
      >
        {MANDATED_EVENTS.map((event, i) => (
          <div
            key={event.id}
            role="listitem"
            style={{ scrollSnapAlign: 'start', minWidth: '300px', maxWidth: '320px' }}
            className="relative rounded-xl overflow-hidden flex-shrink-0 h-[440px] cursor-pointer group"
          >
            {/* Background image */}
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
              sizes="320px"
            />

            {/* Base dark scrim so glass reads cleanly */}
            <div
              className="absolute inset-0 z-[1]"
              style={{ background: 'linear-gradient(to top, rgba(26,26,46,0.90) 0%, rgba(26,26,46,0.50) 55%, rgba(26,26,46,0.15) 100%)' }}
              aria-hidden="true"
            />

            {/* Month badge — top right */}
            <div className="absolute top-4 right-4 z-20 flex flex-col items-center justify-center w-14 h-14 rounded-full bg-primary text-brand-dark font-body font-black text-xs leading-tight text-center">
              {event.month}
            </div>

            {/* Frosted glass card — bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 z-20 p-5 rounded-b-xl"
              style={{
                background: 'rgba(26, 26, 46, 0.55)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                borderTop: '1px solid rgba(204, 168, 40, 0.25)',
              }}
            >
              {/* Tag + season */}
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-[11px] font-body font-semibold px-2 py-0.5 rounded-full tracking-wide ${TAG_COLORS[event.tag] ?? 'bg-white/10 text-white'}`}>
                  {event.tag}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-body text-white/60">
                  <Calendar size={11} aria-hidden="true" />
                  {event.season}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-white text-[18px] leading-[1.25] mb-2">
                {event.title}
              </h3>

              {/* Description */}
              <p className="font-body text-[13px] text-white/80 leading-[1.55] line-clamp-3">
                {event.description}
              </p>

              {/* Gold accent rule */}
              <div className="mt-4 h-[2px] w-10 bg-primary rounded-full" aria-hidden="true" />
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators + CTA */}
      <div className="max-w-container mx-auto px-5 lg:px-[80px] mt-8 flex items-center justify-between">

        {/* Dots */}
        <div className="flex gap-2" role="tablist" aria-label="Event carousel position">
          {MANDATED_EVENTS.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to event ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                i === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* See all link */}
        <Link
          href="/events"
          className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-white/70 hover:text-primary transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
        >
          See All Events <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
