'use client';

// components/layout/Header.tsx
// Fixed navigation header — Nav/Header Desktop + Nav/Header Mobile per design-system.md.
// Shield crest left-anchored, nav links center/right, "Express Interest" Button/Primary.
// Mobile: hamburger menu with full-screen overlay drawer.

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/lines', label: 'Lines' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/events', label: 'Events' },
  { href: '/network', label: 'Network' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trap focus in mobile drawer when open
  useEffect(() => {
    if (!mobileOpen) return;

    const drawer = mobileNavRef.current;
    if (!drawer) return;

    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
        return;
      }
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    first?.focus();
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: '72px',
        background: 'rgba(26, 26, 46, 0.55)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(204, 168, 40, 0.35)',
        boxShadow: isScrolled
          ? '0 1px 24px rgba(204, 168, 40, 0.18), 0 0 0 1px rgba(204, 168, 40, 0.12)'
          : '0 1px 12px rgba(204, 168, 40, 0.10)',
      }}
    >
      <div className="max-w-container mx-auto px-5 lg:px-[80px] h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-sm"
          aria-label="Kappa Delta Chapter of Omega Psi Phi — Home"
        >
          <Image
            src="/images/logo.png"
            alt="Kappa Delta Chapter of Omega Psi Phi logo"
            width={120}
            height={48}
            priority
            style={{ height: '48px', width: 'auto' }}
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-nav font-body font-medium tracking-[0.05em] transition-colors duration-150 min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-sm ${
                  isActive
                    ? 'text-primary underline underline-offset-4'
                    : 'text-text-on-dark hover:text-primary'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          {/* #006 fix: removed onFocus/onBlur JS handlers — focus ring now via CSS focus-visible utilities only */}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center justify-center h-11 px-5 rounded-md bg-primary text-text-on-gold text-label font-body font-semibold tracking-[0.04em] transition-all duration-150 hover:bg-primary-hover hover:shadow-card active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cca828]"
          >
            Express Interest
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          ref={hamburgerRef}
          className="md:hidden flex items-center justify-center w-11 h-11 text-text-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-sm"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      <div
        id="mobile-nav-drawer"
        ref={mobileNavRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!mobileOpen}
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-200 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          top: '60px',
          background: 'rgba(26, 26, 46, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <nav
          className="flex flex-col items-center justify-center h-full gap-6 pb-20"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className={`text-h3-mobile font-display font-bold transition-colors duration-150 min-h-[44px] flex items-center px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-sm ${
                  isActive
                    ? 'text-primary'
                    : 'text-text-on-dark hover:text-primary'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={closeMobile}
            className="mt-4 inline-flex items-center justify-center h-11 px-8 rounded-md bg-primary text-text-on-gold text-label font-body font-semibold tracking-[0.04em] transition-all duration-150 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
          >
            Express Interest
          </Link>
        </nav>
      </div>
    </header>
  );
}
