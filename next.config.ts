import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false, // defaults to true
    buildActivity: true, // defaults to true
    buildActivityPosition: 'bottom-right',
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    cssChunking: true,
    optimizePackageImports: [],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'img.tripi.vn',
        pathname: '/**',
        protocol: 'https',
      },
      {
        hostname: 'gcs.tripi.vn',
        pathname: '/**',
        protocol: 'https',
      },
      {
        hostname: 'img.ophim.live',
        pathname: '/uploads/movies/**',
        protocol: 'https',
      },
    ],
  },

  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  poweredByHeader: false,
  reactStrictMode: true,
  serverExternalPackages: [],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
} satisfies NextConfig;

export default nextConfig;
