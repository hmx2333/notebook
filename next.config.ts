import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",          // 必须：导出静态 HTML 到 /out
  images: {
    unoptimized: true,       // GitHub Pages 不支持 Next.js 图片优化
  },
  reactStrictMode: true,
};

export default nextConfig;
