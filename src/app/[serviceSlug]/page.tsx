import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceLandingPage } from '@/components/seo/ServiceLandingPage';
import {
  SITE_URL,
  SERVICE_SLUGS,
  getServiceContent,
} from '@/data/localSeo';

type Props = {
  params: Promise<{ serviceSlug: string }>;
};

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ serviceSlug: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceSlug } = await params;
  const content = getServiceContent(serviceSlug);

  if (!content) {
    return {};
  }

  const canonical = `${SITE_URL}/${content.slug}`;

  return {
    title: content.title,
    description: content.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      url: canonical,
      title: content.title,
      description: content.metaDescription,
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.metaDescription,
    },
    keywords: [
      content.title,
      'best speech therapy for kids in Gwalior',
      'occupational therapy for children in Gwalior',
      'child rehabilitation center in Gwalior',
      'special education for kids in Gwalior',
      'autism therapy Gwalior',
      'ADHD therapy Gwalior',
      'CP therapy Gwalior',
    ],
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { serviceSlug } = await params;
  const content = getServiceContent(serviceSlug);

  if (!content) {
    notFound();
  }

  return <ServiceLandingPage content={content} />;
}
