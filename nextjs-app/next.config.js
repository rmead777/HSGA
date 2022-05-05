const isProd = process.env.NODE_ENV === "production";

console.log("IS PRODUCTION?", isProd);

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  assetPrefix: isProd ? "./" : "",
  // basePath: isProd ? "" : "",
  images: {
    loader: "custom",
  },
};

module.exports = nextConfig;
