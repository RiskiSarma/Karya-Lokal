import type { NextConfig } from "next";

// Bahasa Indonesia dilayani di "/" (internal: /id), Inggris di "/en".
const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/id" },
        { source: "/blog", destination: "/id/blog" },
        { source: "/blog/:slug", destination: "/id/blog/:slug" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async redirects() {
    return [{ source: "/id/:path*", destination: "/:path*", permanent: true }];
  },
};

export default nextConfig;
