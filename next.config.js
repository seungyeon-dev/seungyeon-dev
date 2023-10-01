const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/seungyeon-dev',
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
