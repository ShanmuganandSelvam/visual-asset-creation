/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',

  // Skip ESLint issues during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Skip TypeScript issues during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Disable Next.js image optimization for static export
  images: { 
    unoptimized: true,
  },
  
  // Remove the custom base path and asset prefix for local development
  // These can be conditionally added for production if needed
  // basePath: '/3dd20f2c-6cff-4110-b3cf-c9031e12bdf0/x8vhihzw/32eez2ep/preview',
  // assetPrefix: '/3dd20f2c-6cff-4110-b3cf-c9031e12bdf0/x8vhihzw/32eez2ep/preview',
};

module.exports = nextConfig;
