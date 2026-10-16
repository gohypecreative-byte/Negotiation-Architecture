import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
