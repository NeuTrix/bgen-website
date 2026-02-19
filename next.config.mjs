/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/examples',
        destination: '/',
        permanent: false,
      },
      {
        source: '/examples/:path*',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

