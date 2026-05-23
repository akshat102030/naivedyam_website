'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { FounderPortrait } from './FounderPortrait';
import { AchievementCards } from './AchievementCards';
import { FounderStats } from './FounderStats';
import { FOUNDER } from '@/data/founder';

export function FounderSection() {
  return (
    <section
      id="about"
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Soft atmospheric backdrop — gentler than hero's, signals "this is a different chapter" */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/4 -left-32 w-[40vw] h-[40vw] rounded-full blur-3xl opacity-40 animate-breathe"
          style={{ background: 'radial-gradient(circle, rgba(184, 216, 200, 0.5), transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[35vw] h-[35vw] rounded-full blur-3xl opacity-35 animate-breathe"
          style={{
            background: 'radial-gradient(circle, rgba(212, 197, 226, 0.55), transparent 70%)',
            animationDelay: '-4s',
          }}
        />
      </div>

      <div className="container-soft above-noise">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">

          {/* ============================================================
              LEFT COLUMN — Portrait + floating achievements
              ============================================================ */}
          <div className="relative">
            <FounderPortrait src={FOUNDER.portraitSrc} alt={`Portrait of ${FOUNDER.name}`} />
            <AchievementCards />

            {/* Pull-quote — floats below portrait on desktop, hidden on mobile (shown elsewhere) */}
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex absolute -bottom-12 left-1/2 -translate-x-1/2 max-w-sm pointer-events-auto"
            >
              <div className="relative glass-cool rounded-2xl px-5 py-4 flex gap-3 items-start">
                <Quote className="w-5 h-5 shrink-0 text-coral-500 mt-1" strokeWidth={1.5} />
                <blockquote className="font-display italic text-ink-900 text-base leading-snug">
                  {FOUNDER.quote}
                </blockquote>
              </div>
            </motion.figure>
          </div>

          {/* ============================================================
              RIGHT COLUMN — Story + stats
              ============================================================ */}
          <div>
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="inline-block text-xs uppercase tracking-[0.25em] text-coral-700 font-medium"
            >
              Meet the founder
            </motion.span>

            {/* Name + title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-display-1 text-ink-900 text-balance"
            >
              <span className="block">{FOUNDER.name.replace('Mrs. ', '')}</span>
              <span className="italic-soul text-gradient-warm text-[0.75em] block mt-1">
                {FOUNDER.honorific}
              </span>
            </motion.h2>

            {/* Bio paragraphs */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
              }}
              className="mt-8 space-y-4 text-ink-800 text-lg leading-relaxed max-w-xl"
            >
              {FOUNDER.bio.map((paragraph, i) => (
                <motion.p
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="text-pretty"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* Mobile-only quote — moved here since the desktop one floats with the portrait */}
            <motion.figure
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:hidden mt-6 glass-cool rounded-2xl px-5 py-4 flex gap-3 items-start"
            >
              <Quote className="w-5 h-5 shrink-0 text-coral-500 mt-1" strokeWidth={1.5} />
              <blockquote className="font-display italic text-ink-900 text-base leading-snug">
                {FOUNDER.quote}
              </blockquote>
            </motion.figure>

            {/* Stats row */}
            <FounderStats />

            {/* Mobile-only achievement stack — desktop version floats around the portrait */}
            <AchievementCards mobile />
          </div>
        </div>
      </div>
    </section>
  );
}
