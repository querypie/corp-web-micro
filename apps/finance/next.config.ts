import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@querypie/microsite-ui", "@querypie/microsite-links"],
};

export default nextConfig;
