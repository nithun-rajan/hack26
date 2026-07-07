/** @type {import('next').NextConfig} */

// On GitHub Pages the site is served from https://<user>.github.io/hack26/,
// so assets and links need the /hack26 prefix. The CI workflow sets
// NEXT_PUBLIC_BASE_PATH; locally it's empty so `npm run dev` stays at root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export", // static HTML export for GitHub Pages
  basePath,
  trailingSlash: true, // /mission -> /mission/index.html (no 404 on refresh)
  images: { unoptimized: true }, // no Image Optimization server on Pages
  reactStrictMode: true,
};

export default nextConfig;
