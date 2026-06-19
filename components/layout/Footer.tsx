// components/layout/Footer.tsx
// Four-column footer on desktop, stacked on mobile — per design-system.md Footer component.
// NAP (Name, Address, Phone) — address must match Google Business Profile for local SEO.

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '@/lib/constants';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/lines', label: 'Lines' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/events', label: 'Events' },
  { href: '/network', label: 'Network' },
  { href: '/contact', label: 'Contact' },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-text-on-dark">
      <div className="max-w-container mx-auto px-5 lg:px-[80px] py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* Column 1 — Logo + Chapter Name + Address (NAP) */}
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="Kappa Delta Chapter of Omega Psi Phi — Home">
              <Image
                src="/images/logo.png"
                alt="Kappa Delta Chapter of Omega Psi Phi logo"
                width={120}
                height={40}
                style={{ height: '40px', width: 'auto' }}
              />
            </Link>
            <p className="text-h4 font-body font-semibold text-text-on-dark leading-snug">
              Kappa Delta Chapter<br />of Omega Psi Phi
            </p>
            {/* NAP — must match Google Business Profile exactly */}
            <address className="not-italic text-body-sm text-text-attribution leading-relaxed">
              1400 University Blvd Suite 230<br />
              Birmingham, AL 35233
            </address>
          </div>

          {/* Column 2 — Navigation */}
          <nav aria-label="Footer navigation">
            <h2 className="text-body-sm font-semibold text-text-on-dark mb-4 uppercase tracking-widest">
              Navigation
            </h2>
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-text-on-dark hover:text-primary transition-colors duration-150 flex items-center py-1.5 px-0 min-h-[36px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — Social Media */}
          {/* TODO: [NEEDS CLIENT INPUT] — Replace [SOCIAL_HANDLE] placeholders with real social handles and URLs. */}
          <div>
            <h2 className="text-body-sm font-semibold text-text-on-dark mb-4 uppercase tracking-widest">
              Follow Us
            </h2>
            <div className="flex flex-col gap-3">
              <a
                href={SOCIAL_LINKS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram: ${SOCIAL_LINKS.instagram.handle}`}
                className="flex items-center gap-3 text-body-sm text-text-on-dark hover:text-primary transition-colors duration-150 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-sm"
              >
                <Instagram size={20} aria-hidden="true" />
                <span>{SOCIAL_LINKS.instagram.handle}</span>
              </a>
              <a
                href={SOCIAL_LINKS.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Facebook: ${SOCIAL_LINKS.facebook.handle}`}
                className="flex items-center gap-3 text-body-sm text-text-on-dark hover:text-primary transition-colors duration-150 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-sm"
              >
                <Facebook size={20} aria-hidden="true" />
                <span>{SOCIAL_LINKS.facebook.handle}</span>
              </a>
              <a
                href={SOCIAL_LINKS.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Twitter/X: ${SOCIAL_LINKS.twitter.handle}`}
                className="flex items-center gap-3 text-body-sm text-text-on-dark hover:text-primary transition-colors duration-150 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-sm"
              >
                <Twitter size={20} aria-hidden="true" />
                <span>{SOCIAL_LINKS.twitter.handle}</span>
              </a>
            </div>
          </div>

          {/* Column 4 — Quick Contact */}
          {/* TODO: [NEEDS CLIENT INPUT] — Chapter public contact email and response time expectation. */}
          <div>
            <h2 className="text-body-sm font-semibold text-text-on-dark mb-4 uppercase tracking-widest">
              Contact
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-body-sm text-text-attribution">Email us at:</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-body-sm text-primary hover:text-primary-hover transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-sm break-all"
              >
                {CONTACT_EMAIL}
              </a>
              {/* TODO: [NEEDS CLIENT INPUT] — Response time expectation (e.g., "We respond within 48 hours"). */}
              <p className="text-caption text-text-attribution mt-1">
                [NEEDS CLIENT INPUT: Response time expectation]
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-caption text-text-attribution text-center">
            &copy; {currentYear} Kappa Delta Chapter of Omega Psi Phi Fraternity, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
