/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd12ufawtd6351k.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'another-domain.com',
      },
    ],
  },
  reactStrictMode: true,
  experimental: {
  },
};

module.exports = nextConfig;
