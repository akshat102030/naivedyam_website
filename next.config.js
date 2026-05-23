const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensures Vercel traces files from this app, not a parent folder with another lockfile
  outputFileTracingRoot: path.join(__dirname),
  reactStrictMode: true,
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
