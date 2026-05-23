'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import { CENTER_GALLERY, type GalleryImage } from '@/data/gallery';
import { GalleryLightbox } from './GalleryLightbox';
import { cn } from '@/lib/utils';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

/** Bento spans: first photo featured large on desktop */
const layoutClass: Record<string, string> = {
  center1: 'sm:col-span-2 sm:row-span-2',
  center2: '',
  center3: '',
  center4: 'sm:col-span-2',
};

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryImage | null>(null);
  const activeIndex = active
    ? CENTER_GALLERY.findIndex((img) => img.id === active.id)
    : -1;

  const open = useCallback((image: GalleryImage) => setActive(image), []);
  const close = useCallback(() => setActive(null), []);

  const goPrev = useCallback(() => {
    if (activeIndex <= 0) return;
    setActive(CENTER_GALLERY[activeIndex - 1]);
  }, [activeIndex]);

  const goNext = useCallback(() => {
    if (activeIndex < 0 || activeIndex >= CENTER_GALLERY.length - 1) return;
    setActive(CENTER_GALLERY[activeIndex + 1]);
  }, [activeIndex]);

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className={cn(
          'grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4',
          'sm:auto-rows-[minmax(180px,1fr)] md:auto-rows-[minmax(200px,1fr)]',
        )}
      >
        {CENTER_GALLERY.map((image) => (
          <motion.button
            key={image.id}
            type="button"
            variants={item}
            onClick={() => open(image)}
            className={cn(
              'group relative w-full h-full min-h-[200px] overflow-hidden rounded-2xl md:rounded-3xl',
              'text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100',
              'border border-cream-300/50 shadow-glass',
              layoutClass[image.id],
            )}
          >
            <div
              className={cn(
                'relative w-full',
                image.id === 'center1'
                  ? 'aspect-[4/3] sm:aspect-auto sm:absolute sm:inset-0 sm:h-full'
                  : 'aspect-[4/3]',
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  image.id === 'center1'
                    ? '(max-width: 640px) 100vw, 50vw'
                    : '(max-width: 640px) 100vw, 25vw'
                }
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
            </div>

            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink-900/55 via-ink-900/10 to-transparent opacity-80 transition-opacity group-hover:opacity-90"
            />

            <div className="absolute inset-x-0 bottom-0 z-[1] p-4 md:p-5">
              <p className="text-sm md:text-base font-medium text-cream-50 text-pretty">
                {image.caption}
              </p>
            </div>

            <span
              aria-hidden
              className="absolute top-3 right-3 z-[1] grid place-items-center w-9 h-9 rounded-full glass-warm text-ink-800 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ZoomIn className="w-4 h-4" />
            </span>
          </motion.button>
        ))}
      </motion.div>

      <GalleryLightbox
        image={active}
        onClose={close}
        onPrev={goPrev}
        onNext={goNext}
        hasPrev={activeIndex > 0}
        hasNext={activeIndex >= 0 && activeIndex < CENTER_GALLERY.length - 1}
      />
    </>
  );
}
