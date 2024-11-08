/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["syncflow-bucket.s3.amazonaws.com", "syncflowbucket.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
