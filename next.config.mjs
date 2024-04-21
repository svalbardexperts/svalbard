/** @type {import('next').NextConfig} */
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

export default nextConfig;
// (http://localhost:5000/storyImages/undefined)