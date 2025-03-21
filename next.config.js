/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ["api.microlink.io"], // Microlink Image Preview
  },
  trailingSlash: true,
};

module.exports = nextConfig;