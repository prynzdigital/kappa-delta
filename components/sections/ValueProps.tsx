// components/sections/ValueProps.tsx
// Homepage Value Props — 3 image cards with brand-dark shadow.

import Image from 'next/image';

const VALUE_PROPS = [
  {
    id: 'vp-first',
    image: '/images/first.png',
    imageAlt: 'Kappa Delta Chapter — the first Black Greek-letter organization founded and chartered at UAB',
    headline: 'The First — and Still Standing',
    body: "No other fraternity can say it: Kappa Delta Chapter was the first Black Greek-letter organization both founded and chartered at UAB. That distinction was earned in 1971 and it has never changed. When you join Kappa Delta, you join the organization that opened the door for every BGLO that followed.",
  },
  {
    id: 'vp-brotherhood',
    image: '/images/brotherhood.png',
    imageAlt: 'Brotherhood of Kappa Delta Chapter spanning generations of UAB alumni',
    headline: 'Brotherhood That Spans Generations',
    body: "Our initiated members aren't just fellow students — they become lifelong brothers. Kappa Delta alumni have gone on to serve as UAB student government president, lead careers in medicine, law, business, and public service, and remain connected through a living network that spans more than five decades.",
  },
  {
    id: 'vp-legacy',
    image: '/images/legacy.png',
    imageAlt: 'Kappa Delta Chapter legacy — campus monument near the historic Ullman West Building at UAB',
    headline: 'A Legacy You Can Stand On',
    body: "Most fraternities talk about legacy. Kappa Delta Chapter has a monument to prove it — permanently installed on the UAB campus near the historic Ullman West Building. We are not a footnote in UAB history. We are part of its foundation.",
  },
];

export default function ValueProps() {
  return (
    <section className="bg-surface py-16 md:py-24" aria-label="Why Kappa Delta">
      <div className="max-w-container mx-auto px-5 lg:px-[80px]">

        {/* Eyebrow */}
        <p className="text-eyebrow font-body text-brand-dark mb-4 text-center tracking-[0.12em] uppercase">
          Why Kappa Delta
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {VALUE_PROPS.map((vp) => (
            <div
              key={vp.id}
              className="group bg-surface-alt rounded-lg overflow-hidden shadow-card-brand hover:shadow-card-brand-hover transition-shadow duration-300 flex flex-col"
            >
              {/* Image area */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={vp.image}
                  alt={vp.imageAlt}
                  fill
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Gold bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary z-10" aria-hidden="true" />
              </div>

              {/* Text content */}
              <div className="flex flex-col gap-3 p-7 flex-1">
                <h2 className="text-h3-mobile md:text-h4 font-display font-bold text-brand-dark leading-snug">
                  {vp.headline}
                </h2>
                <p className="text-body font-body text-text-muted leading-[1.65]">
                  {vp.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
