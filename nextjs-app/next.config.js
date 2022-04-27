const isProd = process.env.NODE_ENV === "production";

console.log("IS PRODUCTION?", isProd);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "./" : "",
  images: {
    loader: "custom",
  },
};

module.exports = nextConfig;
