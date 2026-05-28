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
import { BRAND, CONTACT, SOCIAL } from '@/lib/constants';

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
      <div className="container-soft above-noise">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-base md:text-lg font-medium text-ink-900">
              {BRAND.fullName}
            </p>
            <p className="mt-2 text-sm text-ink-700">
              {CONTACT.address.full}
            </p>
            <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} className="mt-3 inline-block text-sm text-coral-700 hover:text-coral-600 transition-colors">
              Phone: {CONTACT.phone}
            </a>
          </div>

          <div className="md:text-right">
            <p className="text-sm font-medium text-ink-900">Follow us</p>
            <div className="mt-3 flex md:justify-end gap-3">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs text-ink-800 border border-cream-300/70 bg-cream-50/70 hover:bg-peach-100 transition-colors"
              >
                Instagram
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs text-ink-800 border border-cream-300/70 bg-cream-50/70 hover:bg-peach-100 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-ink-500 text-center">
          {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
