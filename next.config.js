/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['dummyimage.com'],
  },
};

module.exports = nextConfig;
