// app/about/opengraph-image.tsx
// Branded fallback OG image for /about — generated via Next.js ImageResponse.
// Gold #cca828 background, white text, page title + subtitle.

import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Our History — Kappa Delta Chapter, Omega Psi Phi';
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
          Our History
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
