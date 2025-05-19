/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.maitretech.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
