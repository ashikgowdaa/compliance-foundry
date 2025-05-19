import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['media.licdn.com' ,"localhost"], // 👈 Add this line
  },
};

export default nextConfig;
