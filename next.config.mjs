/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    async redirects() {
      return [
        {
          source: '/donate',
          destination: 'https://crowdfund.calpoly.edu/project/44011',
          permanent: true, // Set to true if this is a permanent redirect (301), or false for a temporary redirect (302)
        },
      ]
    },
};

export default nextConfig;
