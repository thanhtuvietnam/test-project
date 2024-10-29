/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: true, // defaults to true
    buildActivity: true, // defaults to true
    buildActivityPosition: 'bottom-right',
  },
  experimental: {
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
  // typescript: {
  //   // !! WARN !!
  //   // Dangerously allow production builds to successfully complete even if
  //   // your project has type errors.
  //   // !! WARN !!
  //   ignoreBuildErrors: true,
  // },
};

export default nextConfig;
