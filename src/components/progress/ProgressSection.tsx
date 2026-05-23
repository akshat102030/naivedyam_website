'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { NonLinearTruth } from './NonLinearTruth';
import { MilestoneTimeline } from './MilestoneTimeline';
import { GrowthDimensions } from './GrowthDimensions';

/**
 * The emotional centerpiece of the site.
 *
 * Three movements:
 *  1. The honest framing — "progress doesn't move in a straight line"
 *  2. The milestone journey — vertical timeline of real, small, sacred moments
 *  3. Six dimensions of growth — qualitative shifts we track
 *
 * Each subsection has breathing space. The whole section is long on purpose.
 */
export function ProgressSection() {
  return (
    <section
      id="progress"
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Atmospheric backdrop — dawn → soft daylight as you scroll through */}
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* Warm dawn light at the top */}
        <div
          className="absolute top-0 left-1/4 w-[50vw] h-[50vw] rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(244, 194, 161, 0.6), transparent 70%)' }}
        />
        {/* Softer daylight in the middle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 right-0 w-[40vw] h-[40vw] rounded-full blur-3xl opacity-25 animate-breathe"
          style={{
            background: 'radial-gradient(circle, rgba(168, 197, 226, 0.55), transparent 70%)',
            animationDelay: '-3s',
          }}
        />
        {/* Soft sage at the bottom */}
        <div
          className="absolute bottom-0 left-0 w-[45vw] h-[45vw] rounded-full blur-3xl opacity-25 animate-breathe"
          style={{
            background: 'radial-gradient(circle, rgba(184, 216, 200, 0.6), transparent 70%)',
            animationDelay: '-6s',
          }}
        />
      </div>

      <div className="container-soft above-noise">

        {/* Section heading */}
        <SectionHeading
          eyebrow="Progress, honestly"
          title="What growing looks like, really"
          highlight="really"
          description="We don't promise transformations. We walk beside children — and we measure the journey the way it actually unfolds."
        />

        {/* ===================== Movement 1: The honest truth ===================== */}
        <div className="mt-20 md:mt-28">
          <NonLinearTruth />
        </div>

        {/* Movement transition — a thin gradient divider */}
        <div className="my-24 md:my-32 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-ink-300/40 to-transparent" />
          <span className="text-xs uppercase tracking-[0.3em] text-ink-500">the journey</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-ink-300/40 to-transparent" />
        </div>

        {/* ===================== Movement 2: Milestone timeline ===================== */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 md:mb-24"
          >
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-coral-700 font-medium">
              Moments along the way
            </span>
            <h3 className="mt-3 font-display text-display-2 text-ink-900 text-balance">
              Small moments. Sacred ones.
            </h3>
            <p className="mt-4 max-w-xl mx-auto text-ink-700 leading-relaxed text-pretty">
              These are composite milestones from the families we work with — the kinds of moments
              parents tell us they want to hold onto forever.
            </p>
          </motion.div>

          <MilestoneTimeline />
        </div>

        {/* Movement transition */}
        <div className="my-24 md:my-32 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-ink-300/40 to-transparent" />
          <span className="text-xs uppercase tracking-[0.3em] text-ink-500">the dimensions</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-ink-300/40 to-transparent" />
        </div>

        {/* ===================== Movement 3: Growth dimensions ===================== */}
        <GrowthDimensions />

        {/* ===================== Closing emotional note ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-28 md:mt-32 text-center max-w-2xl mx-auto"
        >
          <p className="font-display italic text-2xl md:text-3xl text-ink-900 text-balance leading-tight">
            &ldquo;What we&apos;re really measuring is the child{' '}
            <span className="text-gradient-warm not-italic font-normal">becoming more themselves</span>.&rdquo;
          </p>
          <p className="mt-4 text-sm tracking-[0.15em] uppercase text-ink-500">
            — Maya Dubey, Founder
          </p>
        </motion.div>
      </div>
    </section>
  );
}
