'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GalleryGrid } from './GalleryGrid';

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative py-32 md:py-40 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-1/4 w-[50vw] h-[50vw] rounded-full blur-3xl opacity-30 animate-breathe"
          style={{ background: 'radial-gradient(circle, rgba(184, 216, 200, 0.5), transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full blur-3xl opacity-25 animate-breathe"
          style={{
            background: 'radial-gradient(circle, rgba(244, 194, 161, 0.5), transparent 70%)',
            animationDelay: '-6s',
          }}
        />
      </div>

      <div className="container-soft above-noise">
        <SectionHeading
          eyebrow="Visit us"
          title="Inside our center"
          highlight="center"
          description="Bright therapy rooms, a sensory gym, and a welcoming space for families — built so children feel safe to explore, play, and grow."
        />

        <div className="mt-16 md:mt-20">
          <GalleryGrid />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-16 text-center text-sm text-ink-500 italic max-w-xl mx-auto"
        >
          Tap any photo to view it larger. We&apos;re happy to show you around in person during your free assessment visit.
        </motion.p>
      </div>
    </section>
  );
}
