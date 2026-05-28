import type { MetadataRoute } from 'next';
import { SERVICE_SLUGS } from '@/data/localSeo';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://naivedyamcdc.com';
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticPages, ...servicePages];
}
