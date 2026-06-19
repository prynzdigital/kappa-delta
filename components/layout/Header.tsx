'use client';

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
  const drawerRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trap focus in drawer
  useEffect(() => {
    if (!mobileOpen) return;
    const drawer = drawerRef.current;
    if (!drawer) return;
    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMobileOpen(false); hamburgerRef.current?.focus(); return; }
      if (e.key === 'Tab') {
        if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
          e.preventDefault();
          (e.shiftKey ? last : first)?.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKey);
    first?.focus();
    return () => document.removeEventListener('keydown', handleKey);
  }, [mobileOpen]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* ── Navbar ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: '72px',
          background: 'rgba(26, 26, 46, 0.55)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(204, 168, 40, 0.35)',
          boxShadow: isScrolled
            ? '0 1px 24px rgba(204, 168, 40, 0.18)'
            : '0 1px 12px rgba(204, 168, 40, 0.10)',
        }}
      >
        <div className="max-w-container mx-auto px-5 lg:px-[80px] h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            aria-label="Kappa Delta Chapter of Omega Psi Phi — Home"
          >
            <Image
              src="/images/logo.png"
              alt="Kappa Delta Chapter of Omega Psi Phi logo"
              width={120}
              height={48}
              priority
              style={{
                height: '48px',
                width: 'auto',
                filter: 'brightness(1.18) drop-shadow(0 1px 6px rgba(255,255,255,0.25)) drop-shadow(0 0 12px rgba(204,168,40,0.2))',
              }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-nav font-body font-medium tracking-[0.05em] transition-colors duration-150 min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-sm ${
                    isActive ? 'text-primary underline underline-offset-4' : 'text-text-on-dark hover:text-primary'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center justify-center h-11 px-5 rounded-md bg-primary text-text-on-gold text-label font-body font-semibold tracking-[0.04em] transition-all duration-150 hover:bg-primary-hover active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Express Interest
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            ref={hamburgerRef}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-md text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── Mobile: backdrop ── */}
      <div
        className={`md:hidden fixed inset-0 z-[55] transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(10,10,20,0.70)', backdropFilter: 'blur(4px)' }}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* ── Mobile: slide-in drawer ── */}
      <div
        id="mobile-nav-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!mobileOpen}
        className={`md:hidden fixed top-0 right-0 bottom-0 z-[60] flex flex-col w-[78vw] max-w-[300px] transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'rgba(18, 18, 36, 0.98)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderLeft: '1px solid rgba(204,168,40,0.25)',
        }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 shrink-0" style={{ height: '72px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <Image
            src="/images/logo.png"
            alt="Kappa Delta Chapter logo"
            width={90}
            height={36}
            style={{ height: '36px', width: 'auto', filter: 'brightness(1.15) drop-shadow(0 0 8px rgba(204,168,40,0.2))' }}
          />
          <button
            onClick={closeMobile}
            className="flex items-center justify-center w-9 h-9 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col flex-1 px-3 py-4 gap-1 overflow-y-auto" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center gap-3 min-h-[52px] px-4 rounded-lg text-[15px] font-body font-semibold tracking-[0.02em] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive
                    ? 'text-primary bg-primary/10'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {/* Active dot */}
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-150 ${
                    isActive ? 'bg-primary' : 'bg-transparent'
                  }`}
                  aria-hidden="true"
                />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA pinned to bottom */}
        <div className="px-4 pb-8 pt-4 shrink-0" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <Link
            href="/contact"
            onClick={closeMobile}
            className="flex items-center justify-center w-full min-h-[50px] rounded-md bg-primary text-brand-dark text-sm font-body font-bold tracking-[0.05em] uppercase transition-all duration-150 hover:bg-primary-hover active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Express Interest
          </Link>
        </div>
      </div>
    </>
  );
}
