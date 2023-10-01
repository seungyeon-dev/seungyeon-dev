const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/seungyeon-dev',
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
};

module.exports = withContentlayer(nextConfig);
