// app/about/page.tsx — About / Chapter History (/about)
// Per metadata.md, wireframes.md Page 2, about.md.

import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/sections/PageHero';
import { AboutCTABand } from '@/components/sections/CTABand';
import BadgeHistoryMilestone from '@/components/ui/Badge';
import JsonLd from '@/components/layout/JsonLd';
import { buildWebPageSchema, buildBreadcrumbSchema } from '@/lib/schema';
import { MILESTONES, CARDINAL_PRINCIPLES } from '@/lib/constants';
import { BookOpen, Heart, Users, Star, Compass, ArrowUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our History — Kappa Delta Chapter, Omega Psi Phi',
  description:
    'Founded November 17, 1971 — the first Black Greek-letter org founded and chartered at UAB. Meet the Revolutionary Eight and our 54-year legacy.',
  openGraph: {
    title: 'The History of Kappa Delta Chapter — Omega Psi Phi',
    description:
      'In 1971, eight men changed UAB history forever. Learn about the founding, the Revolutionary Eight, the campus monument, and 54 years of brotherhood.',
    url: 'https://[DOMAIN]/about',
    images: [{ url: '/og/about.jpg', width: 1200, height: 630, alt: 'History of Kappa Delta Chapter' }],
  },
  alternates: { canonical: 'https://[DOMAIN]/about' },
};

const schemas = [
  buildWebPageSchema({
    url: '/about',
    name: 'Our History — Kappa Delta Chapter, Omega Psi Phi',
    description: 'Founded November 17, 1971 — the first Black Greek-letter org founded and chartered at UAB.',
    breadcrumbs: [{ name: 'About', url: '/about' }],
  }),
  buildBreadcrumbSchema([{ name: 'About', url: '/about' }]),
];

const PRINCIPLE_ICONS = [Star, BookOpen, Compass, ArrowUp];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={schemas} />

      {/* Page Hero */}
      <PageHero
        eyebrow="Our Story"
        headline="54 Years of Legacy: The First Black Greek-Letter Organization at UAB"
        subhead="From eight men and a vision in 1971, to a living brotherhood that has shaped UAB for more than five decades."
        size="standard"
      />

      {/* Founding Story */}
      <section className="bg-surface py-16 md:py-24" aria-labelledby="founding-headline">
        <div className="max-w-container mx-auto px-5 lg:px-[80px]">
          {/* Full-width image */}
          {/* TODO: [NEEDS CLIENT INPUT] — Replace with archival founding-era photo or campus monument photo. */}
          <div
            className="relative w-full rounded-md overflow-hidden bg-surface-mid mb-12"
            style={{ aspectRatio: '16/5', minHeight: '180px' }}
          >
            <Image
              src="/images/placeholder-gallery.svg"
              alt="Archival photograph of early Kappa Delta Chapter brothers, Omega Psi Phi, UAB, circa 1971 — photo coming soon"
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(204, 168, 40, 0.08)' }}
              aria-hidden="true"
            />
          </div>

          {/* Editorial text — max-width 720px centered */}
          <div className="max-w-[720px] mx-auto flex flex-col gap-6">
            <h2 id="founding-headline" className="text-h2-mobile md:text-h2 font-display font-bold text-text leading-[1.15]">
              November 17, 1971 — A Beginning That Changed UAB Forever
            </h2>
            <div className="text-body font-body text-text leading-[1.6] flex flex-col gap-4">
              <p>
                In the fall of 1971, the University of Alabama at Birmingham was a young institution still defining its identity. Into that moment, eight men decided that Black Greek life would not wait for an invitation — they would build it themselves.
              </p>
              <p>
                On November 17, 1971, those eight men formally established what would become the Kappa Delta Chapter of Omega Psi Phi Fraternity, Inc. — the first Black Greek-letter organization founded at UAB. Less than six months later, on May 19, 1972, the chapter received its official charter, becoming the first Black Greek-letter organization chartered at UAB as well.
              </p>
              <p>
                Both distinctions belong to Kappa Delta alone. No other Greek-letter organization in UAB&rsquo;s history can claim both the founding and the chartering.
              </p>
            </div>

            <h3 className="text-h3-mobile md:text-h3 font-display font-bold text-text leading-snug mt-2">
              The Revolutionary Eight
            </h3>
            <div className="text-body font-body text-text leading-[1.6] flex flex-col gap-4">
              <p>
                The men who started this chapter are known as the Revolutionary Eight — the founding line of Kappa Delta Chapter. Their names and their decision remain the beginning of every story told within these walls of brotherhood.
              </p>
              {/* TODO: [NEEDS CLIENT INPUT] — Names of the Revolutionary Eight founding line members.
                  Honoring them by name is strongly recommended. First names, full names, or initials
                  are all acceptable — per chapter's privacy preference. */}
              <div className="bg-surface-mid border border-border rounded-md p-4 text-body-sm text-text-muted italic">
                [NEEDS CLIENT INPUT: Names of the Revolutionary Eight founding line members. First names, full names, or initials — per chapter&rsquo;s preference and member consent.]
              </div>
              <p>
                They chose Omega Psi Phi because of what it stands for: Manhood, Scholarship, Perseverance, and Uplift — four cardinal principles that the Kappa Delta Chapter has carried for over 50 years.
              </p>
              {/* TODO: [NEEDS CLIENT INPUT] — Confirm the four cardinal principles are correct for public copy. */}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Milestones Timeline */}
      <section className="bg-surface-alt py-16 md:py-24" aria-labelledby="milestones-headline">
        <div className="max-w-container mx-auto px-5 lg:px-[80px]">
          {/* aria-hidden: decorative eyebrow — contrast compliance via aria-hidden on light surface (#004 fix: color changed to brand-dark 16.7:1) */}
          <p className="text-eyebrow font-body text-brand-dark mb-3" aria-hidden="true">
            Key Milestones
          </p>
          <h2 id="milestones-headline" className="text-h2-mobile md:text-h2 font-display font-bold text-text mb-12 md:mb-16">
            A Chapter Built to Last
          </h2>

          {/* Timeline — alternating desktop, stacked mobile */}
          <div className="flex flex-col gap-12 md:gap-16">
            {MILESTONES.map((milestone, idx) => (
              <div
                key={milestone.id}
                className={`flex flex-col md:flex-row gap-6 md:gap-10 items-start ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Badge + headline */}
                <div className="flex flex-col gap-3 md:w-1/3">
                  <BadgeHistoryMilestone className="self-start text-xs px-3 py-1.5">
                    {milestone.badgeDate}
                  </BadgeHistoryMilestone>
                  <h3 className="text-h3-mobile md:text-h3 font-display font-bold text-text leading-snug">
                    {milestone.headline}
                  </h3>
                </div>
                {/* Gold vertical line (desktop only) */}
                <div
                  className="hidden md:flex flex-col items-center"
                  aria-hidden="true"
                >
                  <div className="w-1 flex-1 bg-primary rounded-full min-h-[60px]" />
                  <div className="w-3 h-3 rounded-full bg-primary border-2 border-surface-alt" />
                  <div className="w-1 flex-1 bg-primary rounded-full min-h-[60px]" />
                </div>
                {/* Body */}
                <div className="md:w-1/2 border-l-4 border-primary pl-4 md:border-none md:pl-0">
                  <p className="text-body font-body text-text leading-[1.6]">
                    {milestone.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Mission & Cardinal Principles */}
      <section className="bg-surface py-16 md:py-24" aria-labelledby="mission-headline">
        <div className="max-w-container mx-auto px-5 lg:px-[80px]">
          <h2 id="mission-headline" className="text-h2-mobile md:text-h2 font-display font-bold text-text mb-8 text-center">
            Who We Are — What We Stand For
          </h2>

          {/* Mission statement placeholder */}
          {/* TODO: [NEEDS CLIENT INPUT] — Official chapter mission statement or national ΩΨΦ mission. */}
          <div className="max-w-[640px] mx-auto text-center mb-12">
            <p className="text-body font-body text-text leading-[1.6]">
              Omega Psi Phi was founded on four cardinal principles: Manhood, Scholarship, Perseverance, and Uplift. For 54 years, the Kappa Delta Chapter has built its brotherhood around these principles — not as abstract ideals, but as daily practice on the UAB campus and in the Birmingham community.
            </p>
          </div>

          {/* Cardinal Principles — 4-column cards (#009 fix: lg:grid-cols-4 so 4-up only at 1024px+; 2-up at 768px tablet) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CARDINAL_PRINCIPLES.map((principle, idx) => {
              const Icon = PRINCIPLE_ICONS[idx] ?? Star;
              return (
                <div
                  key={principle.id}
                  className="bg-surface-alt rounded-md shadow-card p-6 flex flex-col gap-3 border-l-4 border-primary md:border-l-0 md:border-t-4"
                >
                  <Icon size={28} className="text-primary" aria-hidden="true" />
                  <h3 className="text-h3-mobile font-display font-bold text-text">
                    {principle.name}
                  </h3>
                  {/* TODO: [NEEDS CLIENT INPUT] — Chapter-specific description for each principle. */}
                  <p className="text-body-sm font-body text-text-muted leading-[1.55] italic">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brotherhood Values */}
      <section className="bg-surface-mid py-16 md:py-24" aria-labelledby="values-headline">
        <div className="max-w-container mx-auto px-5 lg:px-[80px]">
          <h2 id="values-headline" className="text-h2-mobile md:text-h2 font-display font-bold text-text mb-12">
            What Brotherhood Looks Like Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-alt rounded-md shadow-card p-8 flex flex-col gap-4">
              <BookOpen size={28} className="text-primary" aria-hidden="true" />
              <h3 className="text-h3-mobile md:text-h3 font-display font-bold text-text">Scholarship</h3>
              <p className="text-body font-body text-text leading-[1.6]">
                Kappa Delta has always held academic excellence as a core expectation, not an afterthought. Brothers hold each other accountable to the standard set by the men who came before them.
              </p>
              {/* TODO: [NEEDS CLIENT INPUT] — GPA requirement or academic standing expectations for membership. */}
            </div>
            <div className="bg-surface-alt rounded-md shadow-card p-8 flex flex-col gap-4">
              <Heart size={28} className="text-primary" aria-hidden="true" />
              <h3 className="text-h3-mobile md:text-h3 font-display font-bold text-text">Service</h3>
              <p className="text-body font-body text-text leading-[1.6]">
                Community engagement is not optional for Kappa Delta brothers. The chapter serves the UAB campus and the broader Birmingham community through organized service initiatives.
              </p>
              {/* TODO: [NEEDS CLIENT INPUT] — Specific service programs or recurring community service activities. */}
            </div>
            <div className="bg-surface-alt rounded-md shadow-card p-8 flex flex-col gap-4">
              <Users size={28} className="text-primary" aria-hidden="true" />
              <h3 className="text-h3-mobile md:text-h3 font-display font-bold text-text">Lifelong Brotherhood</h3>
              <p className="text-body font-body text-text leading-[1.6]">
                Initiation is not a graduation from the chapter — it is an entry point into a brotherhood that spans generations. Kappa Delta alumni remain brothers. The bond does not have an expiration date.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutCTABand />
    </>
  );
}
