import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar/Navbar';
import { Hero } from '@/components/hero/Hero';
import { FounderSection } from '@/components/founder/FounderSection';
import { ServicesSection } from '@/components/services/ServicesSection';
import { ProgressSection } from '@/components/progress/ProgressSection';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { ConditionsSection } from '@/components/conditions/ConditionsSection';
import { GallerySection } from '@/components/gallery/GallerySection';
import { getLocalBusinessSchema } from '@/data/localSeo';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Child Development Center in Gwalior | Speech & Occupational Therapy for Kids',
  description:
    'Naivedyam Child Development Center in Gwalior offers speech therapy for kids, occupational therapy for kids, special education, and child rehabilitation under one roof.',
  alternates: {
    canonical: 'https://naivedyamcdc.com',
  },
  openGraph: {
    title: 'Child Development Center in Gwalior | Speech & Occupational Therapy for Kids',
    description:
      'Trusted child development and rehabilitation support in Gwalior: speech therapy, occupational therapy, special education, and early intervention.',
    url: 'https://naivedyamcdc.com',
  },
};

export default function Home() {
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <main className="relative z-[1] overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
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
      <SiteFooter />
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

function SiteFooter() {
  return (
    <footer className="relative border-t border-cream-300/60 py-12">
      <div className="container-soft above-noise text-center">
        <p className="text-sm md:text-base font-medium text-ink-900">
          Naivedyam Child Development and Rehabilitation Center, City Centre, Gwalior
        </p>
        <p className="mt-2 text-sm text-ink-700">
          {CONTACT.address.full}
        </p>
      </div>
    </footer>
  );
}
