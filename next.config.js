/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', // Ideal for Docker
  images: {
    domains: ['d12ufawtd6351k.cloudfront.net'], // Your CloudFront domain
  },
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
};

module.exports = nextConfig;
