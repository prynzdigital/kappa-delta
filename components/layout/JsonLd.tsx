// components/layout/JsonLd.tsx
// Renders a JSON-LD <script> tag for structured data (schema.org).
// Used in page components for per-page and sitewide schema.

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
