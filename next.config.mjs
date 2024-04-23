/** @type {import('next').NextConfig} */

import withVideos from 'next-videos';
const nextConfig = {
  images: {
    domains: ['i.postimg.cc','13.50.238.74/api'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
    ],
  },
};

export default {
  ...nextConfig,
  ...withVideos(),
};
