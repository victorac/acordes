import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only use basePath and assetPrefix when building for production
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/acordes',
    assetPrefix: '/acordes/',
  } : {}),
};

export default nextConfig;
