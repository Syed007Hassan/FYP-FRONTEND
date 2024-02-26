/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['syncflowbucket.s3.amazonaws.com'],
  },
};

module.exports = nextConfig;
