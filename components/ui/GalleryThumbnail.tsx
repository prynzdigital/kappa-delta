'use client';

// components/ui/GalleryThumbnail.tsx
// Gallery/Thumbnail — per design-system.md §5.
// Caption overlay on hover/focus; click/tap triggers lightbox.

import Image from 'next/image';
import type { GalleryImage } from '@/lib/constants';

interface GalleryThumbnailProps {
  image: GalleryImage;
  index: number;
  onOpen: (index: number) => void;
}

export default function GalleryThumbnail({ image, index, onOpen }: GalleryThumbnailProps) {
  return (
    <button
      onClick={() => onOpen(index)}
      className="group relative w-full aspect-[4/3] overflow-hidden rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 bg-surface-mid"
      aria-label={`View photo: ${image.alt}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover transition-transform duration-200 group-hover:scale-[1.03]"
        loading={index < 6 ? 'eager' : 'lazy'}
      />
      {/* Caption overlay — hidden by default, shown on hover/focus */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-dark to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 flex items-end"
        aria-hidden="true"
      >
        {image.caption && (
          <p className="text-caption text-text-on-dark px-3 pb-3 line-clamp-2">
            {image.caption}
          </p>
        )}
      </div>
    </button>
  );
}
