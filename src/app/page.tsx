import { Navbar } from '@/components/navbar/Navbar';
import { Hero } from '@/components/hero/Hero';
import { FounderSection } from '@/components/founder/FounderSection';
import { ServicesSection } from '@/components/services/ServicesSection';
import { ProgressSection } from '@/components/progress/ProgressSection';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { ConditionsSection } from '@/components/conditions/ConditionsSection';
import { GallerySection } from '@/components/gallery/GallerySection';

export default function Home() {
  return (
    <main className="relative z-[1] overflow-x-clip">
      <Navbar />
      <Hero />
      <FounderSection />
      <ServicesSection />
      <ConditionsSection />
      <ProgressSection />
      <GallerySection />
      <TestimonialsSection />

      {/*
        ============================================================
        Sections below are placeholders. Built in upcoming sessions.
        ============================================================
      */}
      <PlaceholderSection id="assessment"   title="Book a Free Assessment"    next="Embedded Google Form" />
    </main>
  );
}

function PlaceholderSection({ id, title, next }: { id: string; title: string; next: string }) {
  return (
    <section
      id={id}
      className="relative py-32 border-t border-cream-300/60"
    >
      <div className="container-soft above-noise text-center">
        <span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] text-coral-700 bg-peach-100">
          Coming next
        </span>
        <h2 className="mt-4 text-display-2 text-ink-900">{title}</h2>
        <p className="mt-3 text-ink-700">{next}</p>
      </div>
    </section>
  );
}
