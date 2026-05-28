'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import { HeroBackground } from './HeroBackground';
import { FloatingElements } from './FloatingElements';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';

// Stagger system — every reveal child plays 120ms after the previous one
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      <HeroBackground />
      <FloatingElements />

      <div className="container-soft above-noise w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow pill */}
          <motion.div variants={item} className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-warm text-sm text-ink-800">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-coral-500" />
              </span>
              13+ Years caring for special children in Gwalior
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-5 text-xs md:text-sm uppercase tracking-[0.16em] text-ink-600 font-medium"
          >
            Naivedyam Child Development Centre And Rehabilitation Center, City Center, Gwalior
          </motion.p>

          {/* Headline — the emotional core */}
          <motion.h1
            variants={item}
            className="mt-7 text-hero text-ink-900 text-balance"
          >
            Every child deserves a
            <br className="hidden sm:block" />
            {' '}
            <span className="italic-soul text-gradient-warm">chance to shine</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={item}
            className="mt-7 text-lg md:text-xl text-ink-700 max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            At Naivedyam, we walk beside parents through every step of their child&apos;s
            development — with physiotherapy, speech therapy, occupational therapy,
            sensory integration, and special education in a space built for healing.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a href="#assessment">
              <Button size="lg">
                Book Free Assessment
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>
            <a href="#about">
              <Button variant="secondary" size="lg">
                <MessageCircle className="w-4 h-4" />
                Talk to a Therapist
              </Button>
            </a>
          </motion.div>

          {/* Trust strip — micro-stats inside a single warm glass card */}
          <motion.div variants={item} className="mt-16">
            <GlassCard className="!p-4 md:!p-6 inline-block">
              <div className="flex items-center gap-6 md:gap-10 text-left">
                <TrustStat value="13+" label="Years of care" />
                <Divider />
                <TrustStat value="200+" label="Children guided" />
                <Divider />
                <TrustStat value="6" label="Therapy disciplines" />
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-ink-500">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-ink-500" />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Sub-components, kept private to the Hero ---------------- */

function TrustStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-0">
      <div className="font-display text-2xl md:text-3xl text-ink-900 leading-none">
        {value}
      </div>
      <div className="mt-1 text-xs md:text-sm text-ink-700 truncate">{label}</div>
    </div>
  );
}

function Divider() {
  return (
    <div className="hidden md:block w-px h-10 bg-gradient-to-b from-transparent via-ink-300/40 to-transparent" />
  );
}
