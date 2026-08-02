/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'a0.muscache.com',
        protocol: 'https',
        port: '',
      },
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
        port: '',
      },
      {
        hostname: 'glwjdwtkbgtpdembqjlt.supabase.co',
        protocol: 'https',
        port: '',
      },
    ],
  },
};

export default nextConfig;
