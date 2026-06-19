'use client';
// components/sections/CTABand.tsx

import Link from 'next/link';
import { useState, type FormEvent } from 'react';

// ---- Recruitment CTA Band ----
export function RecruitmentCTABand() {
  return (
    <section className="bg-primary py-16 md:py-24" aria-label="Join the brotherhood">
      <div className="max-w-container mx-auto px-5 lg:px-[80px] text-center flex flex-col items-center gap-6">
        <h2 className="text-h2-mobile md:text-h2 font-display font-bold text-text-on-gold leading-[1.15] max-w-2xl">
          Ready to Take Your Place in This Brotherhood?
        </h2>
        <p className="text-body-lg font-body text-text-on-gold max-w-xl leading-[1.65]">
          If you&rsquo;re a UAB undergraduate man who wants to be part of something built to last, we want to hear from you.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center min-h-[44px] px-8 rounded-md bg-brand-dark text-text-on-dark text-label font-body font-semibold tracking-[0.04em] transition-all duration-150 hover:bg-brand-dark-hover active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
          Express Interest
        </Link>
      </div>
    </section>
  );
}

// ---- Alumni CTA Band ----
// Warm charcoal background, left col = heading + CTAs, right col = reconnect form.
export function AlumniCTABand() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', year: '' });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: wire to real endpoint (email, Airtable, etc.)
    setSubmitted(true);
  }

  return (
    <section
      className="bg-brand-dark py-16 md:py-24"
      aria-label="Alumni reconnection"
    >
      <div className="max-w-container mx-auto px-5 lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — heading + CTAs */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-eyebrow font-body text-primary tracking-[0.12em] uppercase text-sm">
                For Our Alumni
              </p>
              <h2 className="font-display font-bold text-primary leading-[1.15]"
                  style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
                Already a Brother?<br />Welcome Home.
              </h2>
              <p className="font-body text-white/75 leading-[1.65] text-base max-w-md">
                Your brotherhood does not expire. Stay connected, attend events, and access the exclusive alumni Network portal to reconnect with brothers across the decades.
              </p>
            </div>

            {/* CTAs stacked under the heading */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/network"
                className="inline-flex items-center justify-center min-h-[44px] px-7 rounded-md bg-primary text-brand-dark text-sm font-body font-bold tracking-[0.04em] transition-all duration-150 hover:brightness-110 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
              >
                Alumni Network
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center justify-center min-h-[44px] px-7 rounded-md border border-white/30 text-sm font-body font-semibold text-white hover:border-primary hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
              >
                View Events
              </Link>
            </div>
          </div>

          {/* Right — reconnect form */}
          <div
            className="rounded-xl p-7 md:p-8"
            style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(204,168,40,0.25)',
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                <span className="text-3xl" aria-hidden="true">✦</span>
                <h3 className="font-display font-bold text-primary text-xl">Welcome back, Brother.</h3>
                <p className="font-body text-white/70 text-sm leading-relaxed max-w-xs">
                  We&rsquo;ve received your information. Expect to hear from the chapter soon.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display font-bold text-white text-lg mb-1">
                  Stay Connected
                </h3>
                <p className="font-body text-white/55 text-sm mb-6">
                  Let us know you&rsquo;re out there. We&rsquo;ll reach out with chapter updates and events.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="alumni-name" className="text-xs font-body font-semibold text-white/60 uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      id="alumni-name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-md px-4 py-2.5 text-[16px] font-body text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="alumni-email" className="text-xs font-body font-semibold text-white/60 uppercase tracking-widest">
                      Email Address
                    </label>
                    <input
                      id="alumni-email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-md px-4 py-2.5 text-[16px] font-body text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="alumni-year" className="text-xs font-body font-semibold text-white/60 uppercase tracking-widest">
                      Graduation Year
                    </label>
                    <input
                      id="alumni-year"
                      type="number"
                      min="1971"
                      max={new Date().getFullYear()}
                      placeholder="e.g. 2005"
                      value={form.year}
                      onChange={(e) => setForm({ ...form, year: e.target.value })}
                      className="w-full rounded-md px-4 py-2.5 text-[16px] font-body text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-1 w-full inline-flex items-center justify-center min-h-[44px] px-7 rounded-md bg-primary text-brand-dark text-sm font-body font-bold tracking-[0.04em] transition-all duration-150 hover:brightness-110 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
                  >
                    Reconnect with the Chapter
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

// ---- About Page CTA Band ----
export function AboutCTABand() {
  return (
    <section className="bg-primary py-16 md:py-24" aria-label="Express interest in the chapter">
      <div className="max-w-container mx-auto px-5 lg:px-[80px] text-center flex flex-col items-center gap-6">
        <h2 className="text-h2-mobile md:text-h2 font-display font-bold text-text-on-gold leading-[1.15] max-w-2xl">
          The Story Doesn&rsquo;t Stop — Your Chapter Awaits You.
        </h2>
        <p className="text-body font-body text-text-on-gold max-w-xl leading-[1.6]">
          If you&rsquo;re a UAB undergraduate man ready to be part of this history, the next step is simple.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center min-h-[44px] px-8 rounded-md bg-brand-dark text-text-on-dark text-label font-body font-semibold tracking-[0.04em] transition-all duration-150 hover:bg-brand-dark-hover active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Express Interest
          </Link>
          <Link
            href="/lines"
            className="inline-flex items-center justify-center min-h-[44px] px-5 text-label font-body font-semibold text-text-on-gold hover:underline hover:text-brand-dark transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
          >
            Meet the Brothers — View Our Lines &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
