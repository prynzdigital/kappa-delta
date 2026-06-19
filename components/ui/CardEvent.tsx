// components/ui/CardEvent.tsx
// Card/Event component — per design-system.md §5.
// Used on /events and homepage events preview.

import Link from 'next/link';
import { Clock, MapPin } from 'lucide-react';
import type { Event } from '@/lib/constants';

interface CardEventProps {
  event: Event;
}

export default function CardEvent({ event }: CardEventProps) {
  return (
    <article
      className="bg-surface-alt rounded-md shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 overflow-hidden focus-within:ring-2 focus-within:ring-primary"
      aria-label={`Event: ${event.name}`}
    >
      <div className="p-6 flex flex-col gap-4">
        {/* Date badge */}
        <div className="self-start">
          <span className="inline-block bg-primary text-text-on-gold text-[13px] font-body font-bold tracking-wide px-3 py-1 rounded-sm">
            {event.displayDate}
          </span>
        </div>

        {/* Event name */}
        <h3 className="text-h3-mobile md:text-h3 font-display font-bold text-text leading-snug">
          {event.name}
        </h3>

        {/* Metadata row */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 text-body-sm text-text-muted">
            <Clock size={16} aria-hidden="true" className="shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-body-sm text-text-muted">
            <MapPin size={16} aria-hidden="true" className="shrink-0" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Description — 3-line clamp */}
        <p className="text-body text-text line-clamp-3 flex-1">
          {event.description}
        </p>

        {/* CTA */}
        <div className="mt-auto">
          <Link
            href={event.ctaHref}
            className="inline-flex items-center text-body-sm font-semibold text-brand-dark hover:text-primary-hover hover:underline transition-colors duration-150 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
          >
            {event.ctaLabel} &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
