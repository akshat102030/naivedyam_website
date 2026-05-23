'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ConditionCard } from './ConditionCard';
import { ConditionModal } from './ConditionModal';
import { CONDITIONS, type Condition } from '@/data/conditions';

/**
 * Conditions section.
 *
 * Flow:
 *  1. Section heading with strengths-first framing copy
 *  2. Gentle reminder that conditions describe differences, not deficits
 *  3. 6-card grid (3-col desktop, 2-col tablet, 1-col mobile)
 *  4. Modal opens on click — strengths first, lived-experience next,
 *     how-we-help with cross-links to services
 */
export function ConditionsSection() {
  const [activeCondition, setActiveCondition] = useState<Condition | null>(null);

  return (
    <section
      id="conditions"
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Atmospheric backdrop — slightly different from neighbouring sections */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/3 -left-32 w-[40vw] h-[40vw] rounded-full blur-3xl opacity-25 animate-breathe"
          style={{ background: 'radial-gradient(circle, rgba(212, 197, 226, 0.5), transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-[40vw] h-[40vw] rounded-full blur-3xl opacity-25 animate-breathe"
          style={{
            background: 'radial-gradient(circle, rgba(184, 216, 200, 0.55), transparent 70%)',
            animationDelay: '-5s',
          }}
        />
      </div>

      <div className="container-soft above-noise">

        {/* Section heading */}
        <SectionHeading
          eyebrow="Who we work with"
          title="Different ways of being, fully welcomed"
          highlight="fully welcomed"
          description="Every child here is met with curiosity, not correction. These are the differences we know well — and the strengths we look for first."
        />

        {/* A short framing note — the philosophical posture for this section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-2xl mx-auto"
        >
          <div className="rounded-2xl border border-cream-200/80 bg-cream-50/60 backdrop-blur-sm px-5 py-4">
            <p className="text-sm leading-relaxed text-ink-700 italic text-pretty text-center">
              We describe each condition starting with what we see in these children first — their strengths.
              Diagnosis matters for guiding therapy. It does not define your child.
            </p>
          </div>
        </motion.div>

        {/* Grid of cards */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 auto-rows-fr">
          {CONDITIONS.map((condition, i) => (
            <ConditionCard
              key={condition.slug}
              condition={condition}
              index={i}
              onClick={() => setActiveCondition(condition)}
            />
          ))}
        </div>

        {/* Note for parents who don't see their child here */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-20 text-center max-w-2xl mx-auto"
        >
          <p className="font-display italic text-lg md:text-xl text-ink-800 text-balance leading-snug">
            Don&apos;t see what you&apos;re looking for?
          </p>
          <p className="mt-2 text-ink-700 leading-relaxed">
            We work with many other developmental differences, behavioural challenges, and unclear diagnoses.
            Reach out — we&apos;ll listen first, then tell you honestly whether we&apos;re the right fit.
          </p>
        </motion.div>
      </div>

      {/* Modal — rendered at the section root so the backdrop covers everything */}
      <ConditionModal
        condition={activeCondition}
        onClose={() => setActiveCondition(null)}
      />
    </section>
  );
}
