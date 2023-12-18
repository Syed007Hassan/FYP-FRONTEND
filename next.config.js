/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
 },
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['dummyimage.com'],
  },
};

module.exports = nextConfig;
