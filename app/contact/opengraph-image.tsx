// app/contact/opengraph-image.tsx
// Branded fallback OG image for /contact — generated via Next.js ImageResponse.

import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Interested in Joining? — Kappa Delta, Omega Psi Phi';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#cca828',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            color: '#ffffff',
            fontSize: 64,
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Join Us
        </div>
        <div
          style={{
            color: '#ffffff',
            fontSize: 32,
            fontWeight: 400,
            textAlign: 'center',
            opacity: 0.9,
          }}
        >
          Kappa Delta Chapter · ΩΨΦ · UAB
        </div>
      </div>
    ),
    { ...size }
  );
}
