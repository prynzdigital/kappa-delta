// lib/schema.ts
// JSON-LD structured data builders — per seo-strategy.md §6
// Domain placeholder: [DOMAIN] — replace at launch.

import type { Event } from './constants';

const DOMAIN = 'https://[DOMAIN]';
const ORG_NAME = 'Kappa Delta Chapter of Omega Psi Phi Fraternity, Inc.';

/** Organization + NGO schema — placed on every page via root layout. */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    additionalType: 'https://schema.org/NGO',
    name: ORG_NAME,
    alternateName: ['Kappa Delta Chapter', 'ΩΨΦ Kappa Delta', 'Que Psi Phi UAB'],
    url: DOMAIN,
    logo: `${DOMAIN}/images/shield-crest.svg`,
    foundingDate: '1971-11-17',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1400 University Boulevard Suite 230',
      addressLocality: 'Birmingham',
      addressRegion: 'AL',
      postalCode: '35233',
      addressCountry: 'US',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'Omega Psi Phi Fraternity, Inc.',
      url: 'https://omegapsiphifraternity.org',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'University of Alabama at Birmingham',
    },
  };
}

/** WebPage schema builder — used on every page. */
export function buildWebPageSchema(params: {
  url: string;
  name: string;
  description: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: params.name,
    description: params.description,
    url: `${DOMAIN}${params.url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: ORG_NAME,
      url: DOMAIN,
    },
  };

  if (params.breadcrumbs && params.breadcrumbs.length > 0) {
    schema['breadcrumb'] = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: DOMAIN,
        },
        ...params.breadcrumbs.map((bc, idx) => ({
          '@type': 'ListItem',
          position: idx + 2,
          name: bc.name,
          item: `${DOMAIN}${bc.url}`,
        })),
      ],
    };
  }

  return schema;
}

/** Event schema builder — used per-event on /events page. */
export function buildEventSchema(event: Event) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    startDate: event.date,
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        streetAddress: event.locationAddress,
        addressLocality: 'Birmingham',
        addressRegion: 'AL',
        addressCountry: 'US',
      },
    },
    description: event.description,
    organizer: {
      '@type': 'Organization',
      name: ORG_NAME,
      url: DOMAIN,
    },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  };
}

/** ImageGallery schema — used on /gallery and /gallery/46th-anniversary. */
export function buildImageGallerySchema(params: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: params.name,
    description: params.description,
    url: `${DOMAIN}${params.url}`,
    author: {
      '@type': 'Organization',
      name: ORG_NAME,
    },
  };
}

/** BreadcrumbList schema — used on sub-pages. */
export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: DOMAIN,
      },
      ...items.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 2,
        name: item.name,
        item: `${DOMAIN}${item.url}`,
      })),
    ],
  };
}
