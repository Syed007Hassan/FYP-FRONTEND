/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    // domains: ['dummyimage.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        port: '',
        pathname: '/600x400/000/fff',
      },
    ],
  },
};

module.exports = nextConfig;
