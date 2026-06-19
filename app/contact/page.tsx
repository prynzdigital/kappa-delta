// app/contact/page.tsx — Contact / How to Join (/contact)
// Per metadata.md, wireframes.md Page 8, contact-and-join.md.

import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactHero } from '@/components/sections/PageHero';
import InterestForm from '@/components/ui/InterestForm';
import AccordionSection from '@/components/ui/Accordion';
import JsonLd from '@/components/layout/JsonLd';
import { buildWebPageSchema, buildBreadcrumbSchema } from '@/lib/schema';
import { ADDRESS, CONTACT_EMAIL, SOCIAL_LINKS, HOW_TO_JOIN_STEPS, FAQ_SECTIONS } from '@/lib/constants';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interested in Joining? — Kappa Delta, Omega Psi Phi',
  description:
    'Thinking about joining Omega Psi Phi at UAB? Reach out to Kappa Delta Chapter — the first Black Greek-letter organization founded and chartered here.',
  openGraph: {
    title: 'Interested in Joining Omega Psi Phi at UAB?',
    description:
      'Take the first step. Reach out to Kappa Delta Chapter — UAB\'s founding Black Greek-letter organization — and express your interest in membership.',
    url: 'https://[DOMAIN]/contact',
    images: [{ url: '/og/contact.jpg', width: 1200, height: 630, alt: 'Contact Kappa Delta Chapter' }],
  },
  alternates: { canonical: 'https://[DOMAIN]/contact' },
};

const schemas = [
  buildWebPageSchema({
    url: '/contact',
    name: 'Interested in Joining? — Kappa Delta, Omega Psi Phi',
    description: 'Express interest in joining Kappa Delta Chapter of Omega Psi Phi at UAB.',
    breadcrumbs: [{ name: 'Contact', url: '/contact' }],
  }),
  buildBreadcrumbSchema([{ name: 'Contact', url: '/contact' }]),
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={schemas} />

      <ContactHero />

      {/* How to Join */}
      <section
        id="how-to-join"
        className="bg-surface-alt py-16 md:py-24"
        aria-labelledby="how-to-join-headline"
      >
        <div className="max-w-container mx-auto px-5 lg:px-[80px]">
          <h2 id="how-to-join-headline" className="text-h2-mobile md:text-h2 font-display font-bold text-text mb-6">
            The Path to Brotherhood — What to Expect
          </h2>
          <p className="text-body font-body text-text leading-[1.6] max-w-[640px] mb-12">
            Joining Omega Psi Phi is not a transaction — it is a commitment. The membership intake process is intentional and designed to ensure that every man who crosses the line is prepared for what brotherhood truly means.
          </p>

          {/* 3-step process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_TO_JOIN_STEPS.map((step) => (
              <div key={step.id} className="flex flex-col gap-4">
                {/* Gold circle number */}
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-text-on-gold text-[20px] font-display font-bold shrink-0"
                  aria-hidden="true"
                >
                  {step.number}
                </div>
                <h3 className="text-h3-mobile font-display font-bold text-text">
                  {step.headline}
                </h3>
                <p className="text-body font-body text-text leading-[1.6]">
                  {step.body}
                </p>
                {/* TODO placeholder note */}
                <p className="text-caption font-body text-text-muted italic">
                  {step.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Form */}
      <section className="bg-surface py-16 md:py-24" aria-labelledby="interest-form-headline">
        <div className="max-w-container mx-auto px-5 lg:px-[80px]">
          <h2 id="interest-form-headline" className="text-h2-mobile md:text-h2 font-display font-bold text-text mb-8">
            Start the Conversation
          </h2>
          <div className="max-w-2xl mx-auto">
            <InterestForm />

            {/* Fallback contact */}
            <div className="mt-6 text-center">
              <p className="text-body-sm font-body text-text-muted">
                Prefer to reach out directly? Email us at:{' '}
                {/* TODO: [NEEDS CLIENT INPUT] — Chapter public contact email. */}
                {/* text-brand-dark (16.7:1 on surface) with gold underline — #005 fix: was text-primary (2.53:1, WCAG AA fail) */}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-brand-dark font-semibold underline decoration-primary hover:text-primary-hover transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cca828] rounded-sm"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* General Contact Information */}
      <section className="bg-surface-alt py-16 md:py-24" aria-labelledby="find-us-headline">
        <div className="max-w-container mx-auto px-5 lg:px-[80px]">
          <h2 id="find-us-headline" className="text-h2-mobile md:text-h2 font-display font-bold text-text mb-8">
            Find Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact info */}
            <div className="flex flex-col gap-4">
              <address className="not-italic text-body font-body text-text leading-[1.6]">
                <strong>Kappa Delta Chapter of Omega Psi Phi Fraternity, Inc.</strong><br />
                {ADDRESS.street}<br />
                {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
              </address>

              {/* Email */}
              <div>
                <p className="text-body-sm font-body text-text-muted mb-1">Email:</p>
                {/* TODO: [NEEDS CLIENT INPUT] — Chapter public contact email. */}
                {/* text-brand-dark with gold underline — #005 fix */}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-brand-dark font-semibold underline decoration-primary hover:text-primary-hover transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cca828] rounded-sm"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              {/* Social media */}
              {/* TODO: [NEEDS CLIENT INPUT] — Social handles and URLs. */}
              <div>
                <p className="text-body-sm font-body text-text-muted mb-2">Social Media:</p>
                <div className="flex items-center gap-4" aria-label="Social media links">
                  <a href={SOCIAL_LINKS.instagram.url} target="_blank" rel="noopener noreferrer"
                    aria-label={`Instagram: ${SOCIAL_LINKS.instagram.handle}`}
                    className="flex items-center justify-center w-11 h-11 text-text hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm">
                    <Instagram size={20} aria-hidden="true" />
                  </a>
                  <a href={SOCIAL_LINKS.facebook.url} target="_blank" rel="noopener noreferrer"
                    aria-label={`Facebook: ${SOCIAL_LINKS.facebook.handle}`}
                    className="flex items-center justify-center w-11 h-11 text-text hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm">
                    <Facebook size={20} aria-hidden="true" />
                  </a>
                  <a href={SOCIAL_LINKS.twitter.url} target="_blank" rel="noopener noreferrer"
                    aria-label={`Twitter/X: ${SOCIAL_LINKS.twitter.handle}`}
                    className="flex items-center justify-center w-11 h-11 text-text hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm">
                    <Twitter size={20} aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Note for alumni */}
              <div className="mt-2 p-4 bg-surface rounded-md border border-border">
                <p className="text-body-sm font-body text-text-muted leading-[1.55]">
                  <strong className="text-text">Alumni:</strong> Seeking access to the Network portal? Visit the{' '}
                  {/* text-brand-dark with gold underline — #005 fix */}
                  <Link href="/network" className="text-brand-dark font-semibold underline decoration-primary hover:text-primary-hover transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cca828] rounded-sm">
                    Alumni Network page
                  </Link>{' '}
                  or reach out via email above and indicate &ldquo;Alumni Network Access&rdquo; in your subject line.
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            {/* TODO: Optional Google Maps embed for UAB campus location — 1400 University Blvd, Birmingham AL 35233 */}
            <div
              className="bg-surface-mid rounded-md flex items-center justify-center text-text-muted text-body-sm font-body italic"
              style={{ minHeight: '280px' }}
              aria-label="Map placeholder — University of Alabama at Birmingham, 1400 University Blvd, Birmingham AL 35233"
            >
              <div className="text-center p-6">
                <p className="mb-2">University of Alabama at Birmingham</p>
                <p>1400 University Blvd Suite 230</p>
                <p>Birmingham, AL 35233</p>
                <p className="mt-4 text-caption">[Optional Google Maps embed — to be added at launch]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions FAQ Accordion */}
      <section className="bg-surface py-16 md:py-24" aria-labelledby="faq-headline">
        <div className="max-w-container mx-auto px-5 lg:px-[80px]">
          {/* aria-hidden: decorative eyebrow — color changed to brand-dark for WCAG AA contrast on light surface (#004 fix) */}
          <p className="text-eyebrow font-body text-brand-dark mb-3" aria-hidden="true">
            We&rsquo;ve Got Answers
          </p>
          <h2 id="faq-headline" className="text-h2-mobile md:text-h2 font-display font-bold text-text mb-8">
            Common Questions
          </h2>
          <div className="max-w-3xl">
            {FAQ_SECTIONS.map((section) => (
              <AccordionSection
                key={section.id}
                heading={section.heading}
                items={section.items}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
