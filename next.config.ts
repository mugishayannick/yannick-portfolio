import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Hosts allowed to serve project screenshots (see src/data/projects.ts).
    // Add a new entry here whenever you point `image` at a new CDN.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
