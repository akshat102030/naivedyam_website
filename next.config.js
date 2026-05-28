const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensures Vercel traces files from this app, not a parent folder with another lockfile
  outputFileTracingRoot: path.join(__dirname),
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'naivedyam.in' }],
        destination: 'https://naivedyamcdc.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.naivedyam.in' }],
        destination: 'https://naivedyamcdc.com/:path*',
        permanent: true,
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

module.exports = nextConfig;
