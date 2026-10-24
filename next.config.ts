import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  output: "standalone",

  turbopack: {
  root: __dirname,
},
};

export default nextConfig;
