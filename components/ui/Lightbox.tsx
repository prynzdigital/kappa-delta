'use client';

// components/ui/Lightbox.tsx
// Modal/Lightbox — per design-system.md §5.
// Full-screen image viewer with prev/next navigation, keyboard support, focus trap.

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from '@/lib/constants';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const image = images[currentIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  // Focus trap
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const focusable = dialog.querySelectorAll<HTMLElement>(
      'button, [href], input, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', trap);
    closeButtonRef.current?.focus();
    return () => document.removeEventListener('keydown', trap);
  }, []);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(26, 26, 46, 0.95)' }}
      role="dialog"
      aria-modal="true"
      aria-label="Photo lightbox"
      aria-describedby="lightbox-caption"
      ref={dialogRef}
      onClick={handleBackdropClick}
    >
      {/* Close button */}
      <button
        ref={closeButtonRef}
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-4 right-4 flex items-center justify-center w-12 h-12 md:w-11 md:h-11 rounded-md text-text-on-dark hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
      >
        <X size={24} aria-hidden="true" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        aria-label="Previous photo"
        className="absolute left-2 md:left-4 flex items-center justify-center w-11 h-11 rounded-md bg-surface-alt text-brand-dark hover:bg-primary hover:text-text-on-gold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <ChevronLeft size={24} aria-hidden="true" />
      </button>

      {/* Image container */}
      <div className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-3">
        <div className="relative" style={{ maxWidth: '90vw', maxHeight: '80vh' }}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="object-contain rounded-sm max-h-[80vh] w-auto"
            priority
          />
        </div>
        {image.caption && (
          <p
            id="lightbox-caption"
            className="text-caption text-text-on-dark text-center max-w-lg px-4"
          >
            {image.caption}
          </p>
        )}
        <p className="text-caption text-text-attribution">
          {currentIndex + 1} / {images.length}
        </p>
      </div>

      {/* Next button */}
      <button
        onClick={onNext}
        aria-label="Next photo"
        className="absolute right-2 md:right-4 flex items-center justify-center w-11 h-11 rounded-md bg-surface-alt text-brand-dark hover:bg-primary hover:text-text-on-gold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <ChevronRight size={24} aria-hidden="true" />
      </button>
    </div>
  );
}
