import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://naivedyamcdc.com/sitemap.xml',
    host: 'https://naivedyamcdc.com',
  };
}
