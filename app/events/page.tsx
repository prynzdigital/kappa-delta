// app/events/page.tsx — Events (/events)
// Per metadata.md, wireframes.md Page 6, events.md.
// Event schema (schema.org/Event) emitted per event card.

import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import CardEvent from '@/components/ui/CardEvent';
import JsonLd from '@/components/layout/JsonLd';
import { buildWebPageSchema, buildBreadcrumbSchema, buildEventSchema } from '@/lib/schema';
import { EVENTS, HAS_CONFIRMED_EVENTS, SOCIAL_LINKS } from '@/lib/constants';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Events — Kappa Delta Chapter, Omega Psi Phi UAB',
  description:
    'Upcoming Kappa Delta Chapter events at UAB — interest meetings, alumni gatherings, community service days, and chapter celebrations in Birmingham, AL.',
  openGraph: {
    title: 'Events — Kappa Delta Chapter, Omega Psi Phi',
    description:
      'Find upcoming Kappa Delta events — interest meetings for prospective members, alumni gatherings, and community service in the Birmingham area.',
    url: 'https://[DOMAIN]/events',
    images: [{ url: '/og/events.jpg', width: 1200, height: 630, alt: 'Kappa Delta Chapter Events' }],
  },
  alternates: { canonical: 'https://[DOMAIN]/events' },
};

const pageSchemas = [
  buildWebPageSchema({
    url: '/events',
    name: 'Events — Kappa Delta Chapter, Omega Psi Phi UAB',
    description: 'Upcoming Kappa Delta Chapter events at UAB.',
    breadcrumbs: [{ name: 'Events', url: '/events' }],
  }),
  buildBreadcrumbSchema([{ name: 'Events', url: '/events' }]),
];

// Event schemas — one per confirmed event (per seo-strategy.md §6.2)
const eventSchemas = HAS_CONFIRMED_EVENTS ? EVENTS.map(buildEventSchema) : [];

export default function EventsPage() {
  return (
    <>
      <JsonLd data={[...pageSchemas, ...eventSchemas]} />

      <PageHero
        eyebrow="Stay in the Loop"
        headline="Upcoming Chapter Events"
        subhead="From interest meetings for prospective members to alumni gatherings and community service days — this is where Kappa Delta shows up. Check back often."
        size="compact"
      />

      {/* Intro copy */}
      <section className="bg-surface py-10" aria-label="Events introduction">
        <div className="max-w-[600px] mx-auto px-5 text-center">
          <p className="text-body font-body text-text leading-[1.6]">
            Kappa Delta Chapter events are open to UAB students, initiated brothers, and alumni alike — unless otherwise noted. Events are the best way to experience the chapter in person before making any decisions. If you have questions about a specific event, reach out through the{' '}
            {/* text-brand-dark (16.7:1 on white) with gold underline — #005 fix: was text-primary (2.83:1, WCAG AA fail) */}
            <Link href="/contact" className="text-brand-dark font-medium underline decoration-primary hover:text-primary-hover transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cca828] rounded-sm">
              Contact page
            </Link>.
          </p>
        </div>
      </section>

      {/* Event cards or no-events placeholder */}
      <section className="bg-surface py-8 pb-24" aria-label="Event listings">
        <div className="max-w-container mx-auto px-5 lg:px-[80px]">
          {HAS_CONFIRMED_EVENTS ? (
            <>
              {/* Event card grid — 2 columns desktop per wireframes.md */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {EVENTS.map((event) => (
                  <CardEvent key={event.id} event={event} />
                ))}
              </div>
              {/* TODO: [NEEDS CLIENT INPUT] — All event details (dates, times, locations, descriptions). */}
            </>
          ) : (
            /* No-events placeholder — MUST show when no events, per events.md §"No Events" Placeholder */
            <div className="max-w-xl mx-auto bg-surface-alt rounded-md p-8 md:p-12 text-center">
              <h2 className="text-h3-mobile md:text-h3 font-display font-bold text-text mb-4">
                Events Are Announced Seasonally
              </h2>
              <p className="text-body font-body text-text-muted leading-[1.6] mb-6">
                The chapter announces upcoming events — including interest meetings for prospective members and alumni gatherings — throughout the academic year. Follow us on social media for the earliest announcements, or check back here at the start of each semester.
              </p>
              {/* TODO: [NEEDS CLIENT INPUT] — Social media handles for these links. */}
              <div className="flex items-center justify-center gap-4 mb-6" aria-label="Social media links">
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
              <Link
                href="/contact"
                className="inline-flex items-center text-label font-body font-semibold text-brand-dark hover:text-primary-hover hover:underline transition-colors duration-150 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
              >
                Get in Touch &rarr;
              </Link>
            </div>
          )}

          {/* Events page footer CTA */}
          <div className="mt-16 text-center">
            <p className="text-body font-body text-text-muted mb-2">
              Don&rsquo;t see an upcoming event? Follow us on social media for announcements between site updates.
            </p>
            <p className="text-body-sm font-body text-text-muted">
              Or{' '}
              <Link href="/contact" className="text-brand-dark font-semibold hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-sm">
                reach out directly — we&rsquo;d love to hear from you.
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
