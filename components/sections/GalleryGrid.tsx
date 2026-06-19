'use client';

// components/sections/GalleryGrid.tsx
// Reusable gallery grid with lightbox — used on /gallery and /gallery/46th-anniversary.
// Per design-system.md Gallery/Thumbnail + Modal/Lightbox.

import { useState, useCallback } from 'react';
import GalleryThumbnail from '@/components/ui/GalleryThumbnail';
import Lightbox from '@/components/ui/Lightbox';
import type { GalleryImage } from '@/lib/constants';

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }, [images.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));
  }, [images.length]);

  return (
    <>
      {/* Grid — 3 columns desktop, 2 columns mobile */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4"
        role="list"
        aria-label="Photo gallery"
      >
        {images.map((image, index) => (
          <div key={image.id} role="listitem">
            <GalleryThumbnail
              image={image}
              index={index}
              onOpen={openLightbox}
            />
          </div>
        ))}
      </div>

      {/* Lightbox portal */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  );
}
