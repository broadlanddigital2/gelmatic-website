import type { NextConfig } from "next";

// Static export: `npm run build` writes plain HTML/CSS/JS + images to ./out,
// which Cloudflare serves as Worker static assets (see wrangler.jsonc).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
