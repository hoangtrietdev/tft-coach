import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.metatft.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
