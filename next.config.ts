import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Allow images from Sanity's CDN
  },
};

export default nextConfig;
