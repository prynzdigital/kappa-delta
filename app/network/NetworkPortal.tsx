'use client';

// app/network/NetworkPortal.tsx
// Authenticated portal view for the Alumni Network page.
// Rendered server-side when getServerSession() returns a valid session.

import { signOut } from 'next-auth/react';
import { CheckCircle, Users, Calendar, Megaphone, User } from 'lucide-react';

export default function NetworkPortal() {
  return (
    <>
      {/* Welcome band */}
      <section className="bg-brand-dark py-12 md:py-16 flex items-center" style={{ minHeight: '200px' }}>
        <div className="max-w-container mx-auto px-5 lg:px-[80px] flex flex-col gap-3">
          <CheckCircle size={32} className="text-success" aria-hidden="true" />
          <h1 className="text-h1-mobile md:text-h1 font-display font-bold text-primary leading-[1.1]">
            Welcome Back, Brother
          </h1>
          <p className="text-body-lg font-body text-text-on-dark leading-[1.65]">
            You&rsquo;re now connected to the Kappa Delta Alumni Network.
          </p>
        </div>
      </section>

      {/* Authenticated content panels */}
      {/* TODO: [NEEDS CLIENT INPUT] — Confirm which portal features are in scope for the initial build:
          alumni directory, member-only events, chapter news/announcements, profile management. */}
      <section className="bg-surface py-16 md:py-24" aria-label="Alumni network panels">
        <div className="max-w-container mx-auto px-5 lg:px-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Alumni Directory */}
            <div className="bg-surface-alt rounded-md shadow-card p-8 flex flex-col gap-4">
              <Users size={28} className="text-primary" aria-hidden="true" />
              <h2 className="text-h3-mobile md:text-h3 font-display font-bold text-text">Alumni Directory</h2>
              <p className="text-body font-body text-text-muted leading-[1.6]">
                Search and browse initiated Kappa Delta brothers.
              </p>
              {/* TODO: [NEEDS CLIENT INPUT] — Alumni directory data and search implementation. */}
              <p className="text-body-sm font-body text-text-muted italic">
                [NEEDS CLIENT INPUT: Alumni directory data and feature scope.]
              </p>
            </div>

            {/* Upcoming Events (alumni-only) */}
            <div className="bg-surface-alt rounded-md shadow-card p-8 flex flex-col gap-4">
              <Calendar size={28} className="text-primary" aria-hidden="true" />
              <h2 className="text-h3-mobile md:text-h3 font-display font-bold text-text">Upcoming Events</h2>
              <p className="text-body font-body text-text-muted leading-[1.6]">
                Events visible only to authenticated alumni brothers.
              </p>
              {/* TODO: [NEEDS CLIENT INPUT] — Alumni-only events data. */}
              <p className="text-body-sm font-body text-text-muted italic">
                [NEEDS CLIENT INPUT: Alumni-only events to display here.]
              </p>
            </div>

            {/* Chapter News */}
            <div className="bg-surface-alt rounded-md shadow-card p-8 flex flex-col gap-4">
              <Megaphone size={28} className="text-primary" aria-hidden="true" />
              <h2 className="text-h3-mobile md:text-h3 font-display font-bold text-text">Chapter News</h2>
              <p className="text-body font-body text-text-muted leading-[1.6]">
                Internal announcements and chapter updates for members only.
              </p>
              {/* TODO: [NEEDS CLIENT INPUT] — Internal chapter announcements. */}
              <p className="text-body-sm font-body text-text-muted italic">
                [NEEDS CLIENT INPUT: Chapter announcements and news content.]
              </p>
            </div>

            {/* Profile / Account */}
            <div className="bg-surface-alt rounded-md shadow-card p-8 flex flex-col gap-4">
              <User size={28} className="text-primary" aria-hidden="true" />
              <h2 className="text-h3-mobile md:text-h3 font-display font-bold text-text">My Profile</h2>
              <p className="text-body font-body text-text-muted leading-[1.6]">
                Update your contact information and manage your credentials.
              </p>
              {/* TODO: [NEEDS CLIENT INPUT] — Profile management implementation. */}
              <p className="text-body-sm font-body text-text-muted italic">
                [NEEDS CLIENT INPUT: Profile management scope and fields.]
              </p>
            </div>
          </div>

          {/* Sign out */}
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => signOut({ callbackUrl: '/network' })}
              className="text-body-sm font-body text-text-muted hover:text-error hover:underline transition-colors min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cca828] rounded-sm"
            >
              Sign Out
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
