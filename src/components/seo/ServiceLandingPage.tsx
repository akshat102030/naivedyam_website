import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/navbar/Navbar';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import {
  SITE_URL,
  type ServiceLandingContent,
  SERVICE_PAGE_CONTENT,
} from '@/data/localSeo';

type Props = {
  content: ServiceLandingContent;
};

export function ServiceLandingPage({ content }: Props) {
  const breadcrumbItems = [
    { name: 'Home', item: SITE_URL },
    { name: 'Services', item: `${SITE_URL}/#services` },
    { name: content.serviceName, item: `${SITE_URL}/${content.slug}` },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: content.serviceName,
    name: content.title,
    areaServed: 'Gwalior',
    provider: {
      '@type': 'MedicalBusiness',
      name: 'Naivedyam Child Development Center',
      url: SITE_URL,
    },
    description: content.metaDescription,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <main className="relative z-[1] overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <section className="relative py-32 md:py-40 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div
            className="absolute top-0 right-1/4 w-[45vw] h-[45vw] rounded-full blur-3xl opacity-25 animate-breathe"
            style={{ background: 'radial-gradient(circle, rgba(244, 194, 161, 0.55), transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 -left-32 w-[40vw] h-[40vw] rounded-full blur-3xl opacity-25 animate-breathe"
            style={{
              background: 'radial-gradient(circle, rgba(168, 197, 226, 0.5), transparent 70%)',
              animationDelay: '-5s',
            }}
          />
        </div>

        <div className="container-soft above-noise">
          <SectionHeading
            eyebrow="Naivedyam Child Development Center"
            title={content.h1}
            highlight="Gwalior"
            description={content.intro}
          />

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Link href="/#assessment">
              <Button size="lg">
                Book Free Assessment
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/#services">
              <Button variant="secondary" size="lg">View All Services</Button>
            </Link>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-6">
            <GlassCard>
              <h2 className="text-display-2 text-ink-900">When to seek help</h2>
              <ul className="mt-6 space-y-3">
                {content.whenToSeekHelp.map((item) => (
                  <li key={item} className="flex gap-3 text-ink-700 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-coral-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard tint="cool">
              <h2 className="text-display-2 text-ink-900">Our treatment approach</h2>
              <ul className="mt-6 space-y-3">
                {content.treatmentApproach.map((item) => (
                  <li key={item} className="flex gap-3 text-ink-700 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-sky-700 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <div className="mt-12 glass-warm rounded-3xl p-6 md:p-8 border border-cream-300/60">
            <h3 className="text-display-2 text-ink-900 text-center">Frequently asked questions</h3>
            <div className="mt-8 grid gap-5">
              {content.faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl bg-cream-50/60 border border-cream-300/60 p-5">
                  <h4 className="text-xl text-ink-900">{faq.question}</h4>
                  <p className="mt-2 text-ink-700 leading-relaxed">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-display-2 text-ink-900 text-center">Explore related services</h3>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {content.relatedServices.map((slug) => (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm text-ink-800 hover:text-coral-700 bg-cream-50/70 border border-cream-300/60 hover:bg-peach-100 transition-colors"
                >
                  {SERVICE_PAGE_CONTENT[slug].serviceName}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
