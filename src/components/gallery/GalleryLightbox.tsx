'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryImage } from '@/data/gallery';
import { cn } from '@/lib/utils';

type Props = {
  image: GalleryImage | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
};

export function GalleryLightbox({
  image,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!image) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    }

    document.addEventListener('keydown', handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [image, onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          aria-modal="true"
          role="dialog"
          aria-label={image.alt}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink-900/50 backdrop-blur-md"
            aria-hidden
          />

          <motion.figure
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-cream-50 shadow-glass">
              <div className="relative aspect-[4/3] md:aspect-[16/10] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 90vw"
                  className="object-contain bg-ink-900/5"
                  priority
                />
              </div>
              <figcaption className="px-5 py-4 md:px-6 md:py-5 border-t border-cream-300/60 text-sm md:text-base text-ink-700">
                {image.caption}
              </figcaption>
            </div>

            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label="Close gallery"
              className="absolute -top-2 -right-2 md:top-4 md:right-4 z-20 grid place-items-center w-10 h-10 rounded-full glass-warm text-ink-900 hover:text-coral-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {hasPrev && (
              <button
                type="button"
                onClick={onPrev}
                aria-label="Previous photo"
                className="absolute left-2 md:-left-14 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full glass-warm text-ink-900 hover:text-coral-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {hasNext && (
              <button
                type="button"
                onClick={onNext}
                aria-label="Next photo"
                className={cn(
                  'absolute right-2 md:-right-14 top-1/2 -translate-y-1/2',
                  'grid place-items-center w-10 h-10 rounded-full glass-warm text-ink-900 hover:text-coral-700 transition-colors',
                )}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
