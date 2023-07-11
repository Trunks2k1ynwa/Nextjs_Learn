/**
 * @type {import('next').NextConfig}
 */
const path = require('path');
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['pbs.twimg.com'],
  },
  experimental: {
    appDir: true,
    serverActions: true,
  },
};
