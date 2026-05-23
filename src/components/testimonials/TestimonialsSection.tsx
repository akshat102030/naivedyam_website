'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from './TestimonialCard';
import { FeaturedStories } from './FeaturedStories';
import { TrustStrip } from './TrustStrip';
import { TESTIMONIALS } from '@/data/testimonials';

/**
 * Testimonials section — "Letters, not reviews."
 *
 * Composition:
 *  1. Section heading
 *  2. Featured stories with manual navigation (cycle through 3-4 long-form quotes)
 *  3. Consent note — visible, not buried in a footer
 *  4. Honest trust strip — structural facts, not 5-star ratings
 *  5. Wall of supporting (non-featured) testimonials — smaller, calmer
 *  6. Quiet closer
 *
 * No autoplay. No carousels. Parents read at their own pace.
 */
export function TestimonialsSection() {
  const featured = TESTIMONIALS.filter((t) => t.featured);
  const supporting = TESTIMONIALS.filter((t) => !t.featured);

  return (
    <section
      id="testimonials"
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Soft atmospheric backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/4 -right-32 w-[45vw] h-[45vw] rounded-full blur-3xl opacity-25 animate-breathe"
          style={{ background: 'radial-gradient(circle, rgba(244, 194, 161, 0.55), transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 -left-32 w-[40vw] h-[40vw] rounded-full blur-3xl opacity-25 animate-breathe"
          style={{
            background: 'radial-gradient(circle, rgba(212, 197, 226, 0.55), transparent 70%)',
            animationDelay: '-5s',
          }}
        />
      </div>

      <div className="container-soft above-noise">

        {/* 1. Section heading */}
        <SectionHeading
          eyebrow="Parent voices"
          title="In their own words"
          highlight="own words"
          description="Real families talking about real moments. Each story shared here was given to us — and is kept here — with permission."
        />

        {/* 2. Featured stories with manual navigation */}
        {featured.length > 0 && (
          <div className="mt-16 md:mt-20">
            <FeaturedStories featured={featured} />
          </div>
        )}

        {/* 3. Consent note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 mx-auto max-w-3xl"
        >
          <div className="rounded-2xl border border-cream-200/80 bg-cream-50/70 backdrop-blur-sm px-5 py-4 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 mt-0.5 text-sage-700 shrink-0" strokeWidth={2} />
            <p className="text-sm text-ink-700 leading-relaxed">
              <strong className="font-medium text-ink-900">A note on consent:</strong>{' '}
              Every story shared here represents a family who explicitly chose to share it
              with us. Names and identifying details are used only with written permission.
              We never publish details about a child without their family&apos;s full agreement.
            </p>
          </div>
        </motion.div>

        {/* 4. Honest trust strip */}
        <div className="mt-12">
          <TrustStrip />
        </div>

        {/* Movement divider */}
        <div className="my-24 md:my-28 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-ink-300/40 to-transparent" />
          <span className="text-xs uppercase tracking-[0.3em] text-ink-500">more voices</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-ink-300/40 to-transparent" />
        </div>

        {/* 5. Wall of supporting testimonials */}
        {supporting.length > 0 && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 auto-rows-fr">
              {supporting.map((t, i) => (
                <TestimonialCard
                  key={t.id}
                  testimonial={t}
                  index={i + 1}
                />
              ))}
            </div>
          </div>
        )}

        {/* 6. Quiet closer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 md:mt-24 text-center max-w-2xl mx-auto"
        >
          <p className="font-display italic text-xl md:text-2xl text-ink-800 text-balance leading-snug">
            Some stories aren&apos;t ready to be shared yet — and we hold those just as carefully.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
