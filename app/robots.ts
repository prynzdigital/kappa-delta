// app/robots.ts
// robots.txt — disallow /network per seo-strategy.md §7.
// All other pages: allow.

import type { MetadataRoute } from 'next';

const BASE_URL = 'https://[DOMAIN]';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/network',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
