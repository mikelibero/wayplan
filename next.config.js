/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // i18n: {
  //   locales: ['es-ES'],
  //   defaultLocale: 'es-ES',
  // },
  images: {
    domains: ['127.0.0.1'],
    unoptimized: true
  },
};

module.exports = nextConfig;
