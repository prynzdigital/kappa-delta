// components/ui/CardTestimonial.tsx
// Card/Testimonial — per design-system.md §5.
// Large decorative gold quotation mark, body-lg italic, attribution in #a8a8c0.
// Used on homepage "In Their Own Words" dark band.

import type { Testimonial } from '@/lib/constants';

interface CardTestimonialProps {
  testimonial: Testimonial;
}

export default function CardTestimonial({ testimonial }: CardTestimonialProps) {
  return (
    <blockquote className="flex flex-col gap-4">
      {/* Decorative quotation mark — Playfair Display 80px / 56px mobile */}
      <span
        className="font-display text-primary leading-none select-none"
        style={{ fontSize: '80px', lineHeight: 1 }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Quote text */}
      <p className="text-body-lg-mobile md:text-body-lg font-body italic text-text-on-dark leading-[1.65] -mt-8">
        {testimonial.quote}
      </p>

      {/* Attribution */}
      <footer>
        <cite
          className="text-caption font-body not-italic"
          style={{ color: '#a8a8c0' }}
        >
          &mdash; {testimonial.attribution}
        </cite>
      </footer>
    </blockquote>
  );
}
