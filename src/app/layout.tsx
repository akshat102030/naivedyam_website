import type { Metadata, Viewport } from 'next';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import { SmoothScrollProvider } from '@/components/animations/SmoothScrollProvider';
import { BRAND } from '@/lib/constants';
import './globals.css';

// Distinctive humanist serif — feels warm, editorial, human.
// Carries the emotional weight of headlines.
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

// Soft humanist sans for body — friendly without being cute.
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://naivedyamcdc.com'),
  title: {
    default: 'Child Development Center in Gwalior | Speech & Occupational Therapy for Kids',
    template: `%s — ${BRAND.name}`,
  },
  description: BRAND.shortDescription,
  alternates: {
    canonical: 'https://naivedyamcdc.com',
  },
  keywords: [
    'Naivedyam Child Development Center',
    'Child Development Center Gwalior',
    'Child Rehabilitation in Gwalior',
    'ABA Therapy Gwalior',
    'Autism Therapy Gwalior',
    'Speech Therapy for Kids in Gwalior',
    'Occupational Therapy for Kids in Gwalior',
    'Physiotherapy children Gwalior',
    'Special Education for Kids in Gwalior',
    'Cerebral Palsy therapy India',
    'Down Syndrome support',
    'Learning Disabilities help',
  ],
  authors: [{ name: BRAND.fullName }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://naivedyamcdc.com',
    siteName: BRAND.name,
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.shortDescription,
    images: [BRAND.logoSrc],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.shortDescription,
    images: [BRAND.logoSrc],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? '',
    },
  },
  robots: { index: true, follow: true },
  icons: {
    icon: BRAND.logoSrc,
    apple: BRAND.logoSrc,
  },
};

export const viewport: Viewport = {
  themeColor: '#FBF7F1',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
