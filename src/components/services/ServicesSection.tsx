'use client';

import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServicesGrid } from './ServicesGrid';

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Atmospheric backdrop — different from Founder section's so each chapter feels distinct */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 right-1/4 w-[45vw] h-[45vw] rounded-full blur-3xl opacity-30 animate-breathe"
          style={{ background: 'radial-gradient(circle, rgba(168, 197, 226, 0.55), transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 -left-32 w-[40vw] h-[40vw] rounded-full blur-3xl opacity-30 animate-breathe"
          style={{
            background: 'radial-gradient(circle, rgba(244, 194, 161, 0.55), transparent 70%)',
            animationDelay: '-5s',
          }}
        />
      </div>

      <div className="container-soft above-noise">
        <SectionHeading
          eyebrow="How we care"
          title="Six paths to your child's flourishing"
          highlight="flourishing"
          description="Each therapy is a different way of meeting your child where they are — and walking with them, at their pace, toward their own version of thriving."
        />

        <div className="mt-16 md:mt-20">
          <ServicesGrid />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/speech-therapy-gwalior" className="inline-flex items-center px-4 py-2 rounded-full text-sm text-ink-800 hover:text-coral-700 bg-cream-50/70 border border-cream-300/60 hover:bg-peach-100 transition-colors">
            Speech Therapy for Kids in Gwalior
          </Link>
          <Link href="/occupational-therapy-gwalior" className="inline-flex items-center px-4 py-2 rounded-full text-sm text-ink-800 hover:text-coral-700 bg-cream-50/70 border border-cream-300/60 hover:bg-peach-100 transition-colors">
            Occupational Therapy for Kids in Gwalior
          </Link>
          <Link href="/special-education-gwalior" className="inline-flex items-center px-4 py-2 rounded-full text-sm text-ink-800 hover:text-coral-700 bg-cream-50/70 border border-cream-300/60 hover:bg-peach-100 transition-colors">
            Special Education for Kids in Gwalior
          </Link>
          <Link href="/child-rehabilitation-gwalior" className="inline-flex items-center px-4 py-2 rounded-full text-sm text-ink-800 hover:text-coral-700 bg-cream-50/70 border border-cream-300/60 hover:bg-peach-100 transition-colors">
            Child Rehabilitation in Gwalior
          </Link>
          <Link href="/child-development-center-gwalior" className="inline-flex items-center px-4 py-2 rounded-full text-sm text-ink-800 hover:text-coral-700 bg-cream-50/70 border border-cream-300/60 hover:bg-peach-100 transition-colors">
            Child Development Center in Gwalior
          </Link>
        </div>
      </div>
    </section>
  );
}
