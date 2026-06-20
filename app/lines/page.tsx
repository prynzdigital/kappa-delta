// app/lines/page.tsx — Lines / Pledge Classes (/lines)
// Per metadata.md, wireframes.md Page 3, lines.md.

import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import CardLineEntry from '@/components/ui/CardLineEntry';
import JsonLd from '@/components/layout/JsonLd';
import { buildWebPageSchema, buildBreadcrumbSchema } from '@/lib/schema';
import { LINES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Lines — Pledge Classes — Kappa Delta, Omega Psi Phi',
  description:
    'Explore every Kappa Delta pledge class from the founding line forward. A living record of the men who built and sustained brotherhood at UAB since 1971.',
  openGraph: {
    title: 'Lines of Kappa Delta Chapter — Omega Psi Phi',
    description:
      'Every line. Every brother. From the Revolutionary Eight forward — a 54-year record of the men who chose Omega Psi Phi at UAB.',
    url: 'https://[DOMAIN]/lines',
    images: [{ url: '/og/lines.jpg', width: 1200, height: 630, alt: 'Lines of Kappa Delta Chapter' }],
  },
  alternates: { canonical: 'https://[DOMAIN]/lines' },
};

const schemas = [
  buildWebPageSchema({
    url: '/lines',
    name: 'Lines — Pledge Classes — Kappa Delta, Omega Psi Phi',
    description: 'Every Kappa Delta pledge class from the founding line forward.',
    breadcrumbs: [{ name: 'Lines', url: '/lines' }],
  }),
  buildBreadcrumbSchema([{ name: 'Lines', url: '/lines' }]),
];

export default function LinesPage() {
  return (
    <>
      <JsonLd data={schemas} />

      <PageHero
        eyebrow="The Brotherhood, Class by Class"
        headline="The Lines of Kappa Delta Chapter"
        subhead="Every man initiated into Kappa Delta Chapter is part of a line — a pledge class that carries a name, a number, and a place in the living history of Omega Psi Phi at UAB."
        size="medium"
      />

      {/* What "Lines" Means */}
      <section className="bg-surface py-16 md:py-24" aria-labelledby="lines-intro-headline">
        <div className="max-w-[720px] mx-auto px-5 lg:px-8">
          <h2 id="lines-intro-headline" className="text-h2-mobile md:text-h2 font-display font-bold text-text mb-6">
            A Tradition Rooted in Brotherhood
          </h2>
          <div className="text-body font-body text-text leading-[1.6] flex flex-col gap-4">
            <p>
              In Omega Psi Phi, each group of men initiated together is called a <strong>line</strong> — a term that carries deep meaning within the fraternity&rsquo;s tradition. A line is more than a cohort; it is a bond formed through a shared experience of commitment and brotherhood. Each line receives a name chosen to reflect its identity, and each member of that line carries that name as part of his story in the fraternity forever.
            </p>
            <p>
              The Kappa Delta Chapter&rsquo;s lines stretch back to 1971 and the Revolutionary Eight — the eight men who started everything. Every line since then has added its name to a record that now spans more than five decades. This page is that record.
            </p>
            {/* TODO: [NEEDS CLIENT INPUT] — Confirm whether "line" is preferred over "pledge class" in public-facing copy. */}
            <p>
              For prospective members: the lines you see here are the men who came before you. Each entry represents brothers who chose Kappa Delta, completed the membership intake process, and became part of something permanent.
            </p>
          </div>
        </div>
      </section>

      {/* Lines Index */}
      {/* TODO: [NEEDS CLIENT INPUT] — Full line count needed to determine if decade-based index
          is appropriate (shown only if 15+ total lines). Currently hidden since full data is pending. */}

      {/* Stats strip */}
      <section className="bg-brand-dark py-10" aria-label="Chapter lines at a glance">
        <div className="max-w-container mx-auto px-5 lg:px-[80px]">
          <dl className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col gap-1">
              <dt className="text-eyebrow text-primary tracking-widest">Lines</dt>
              <dd className="text-h1-mobile md:text-h1 font-display font-bold text-text-on-dark">33</dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="text-eyebrow text-primary tracking-widest">Brothers</dt>
              <dd className="text-h1-mobile md:text-h1 font-display font-bold text-text-on-dark">140+</dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="text-eyebrow text-primary tracking-widest">Years Active</dt>
              <dd className="text-h1-mobile md:text-h1 font-display font-bold text-text-on-dark">54</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Lines List — frosted glass timeline */}
      <section className="relative bg-brand-dark overflow-hidden py-16 pb-24" aria-label="Kappa Delta Chapter pledge class records">
        {/* Decorative color blobs — blurred behind frosted cards */}
        <div className="pointer-events-none absolute top-[5%]   left-[8%]  w-80 h-80 rounded-full bg-amber-400/20   blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute top-[18%]  right-[6%] w-96 h-96 rounded-full bg-pink-500/15    blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute top-[38%]  left-[15%] w-72 h-72 rounded-full bg-violet-600/15  blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute top-[55%]  right-[10%] w-80 h-80 rounded-full bg-teal-500/15   blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute top-[72%]  left-[5%]  w-64 h-64 rounded-full bg-orange-500/15  blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-[8%] right-[20%] w-96 h-96 rounded-full bg-cyan-400/10   blur-3xl" aria-hidden="true" />

        <div className="relative max-w-container mx-auto px-5 lg:px-[80px]">
          {/* Desktop center spine */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-primary/30 hidden md:block" aria-hidden="true" />
          {/* Mobile left spine */}
          <div className="pointer-events-none absolute inset-y-0 left-[37px] w-px bg-primary/30 md:hidden" aria-hidden="true" />

          <div className="flex flex-col gap-8 md:gap-12">
            {LINES.map((line, index) => (
              <CardLineEntry key={line.id} line={line} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing Brotherhood CTA — understated, per wireframes.md */}
      <section className="bg-surface-alt py-16 md:py-24" aria-label="Interest invitation">
        <div className="max-w-container mx-auto px-5 lg:px-[80px] flex flex-col items-center text-center gap-4">
          <h2 className="text-h3-mobile md:text-h3 font-display font-bold text-text">
            See Your Name Here One Day?
          </h2>
          <p className="text-body font-body text-text-muted max-w-md leading-[1.6]">
            Every line on this page started with a man who decided to take the first step. Yours can too.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-[44px] px-5 text-label font-body font-semibold text-brand-dark hover:text-primary-hover hover:underline transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
            >
              Express Interest in Kappa Delta &rarr;
            </Link>
            <Link
              href="/contact#how-to-join"
              className="inline-flex items-center justify-center min-h-[44px] px-5 text-label font-body font-semibold text-brand-dark hover:text-primary-hover hover:underline transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
            >
              Learn How to Join &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
