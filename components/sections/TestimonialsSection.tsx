// components/sections/TestimonialsSection.tsx
// Homepage Social Proof / Brotherhood Testimonials — per wireframes.md Page 1 SOCIAL PROOF block.
// Dark background band with 3 Card/Testimonial components.
// TODO: [NEEDS CLIENT INPUT] — All three testimonials require real quotes before launch.

import { TESTIMONIALS } from '@/lib/constants';
import CardTestimonial from '@/components/ui/CardTestimonial';

export default function TestimonialsSection() {
  return (
    <section className="bg-brand-dark py-16 md:py-24" aria-label="Brotherhood testimonials">
      <div className="max-w-container mx-auto px-5 lg:px-[80px]">
        <h2 className="text-h2-mobile md:text-h2 font-display font-bold text-primary mb-12 text-center">
          In Their Own Words
        </h2>

        {/* TODO: [NEEDS CLIENT INPUT] — Replace placeholder testimonials with real quotes from
            current/former members. See homepage.md §Social Proof for the required pattern. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((testimonial) => (
            <CardTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
