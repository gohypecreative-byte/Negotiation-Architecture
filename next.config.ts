import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Version 13 navigation: research is part of Negotiation Architecture.
  async redirects() {
    return [
      { source: "/methodology", destination: "/negotiation-architecture", permanent: true },
      { source: "/research", destination: "/negotiation-architecture#science", permanent: true },
      { source: "/programs", destination: "/advisory-programmes", permanent: true },
    ];
  },
  async headers() {
    return [{
      // Versioned assets can be reused across visits without revalidation.
      // Publish changed frames under a new versioned directory.
      source: "/hero-scroll-v1/:frame.webp",
      headers: [{
        key: "Cache-Control",
        value: "public, max-age=31536000, immutable",
      }],
    }];
  },
  images: {
    localPatterns: [
      { pathname: "/**", search: "" },
      // These photo directories use content-version queries to refresh cached edits.
      { pathname: "/website%20pictures%20formal%20and%20informal/**" },
      { pathname: "/images/gallery/**" },
    ],
  },
};

export default nextConfig;
