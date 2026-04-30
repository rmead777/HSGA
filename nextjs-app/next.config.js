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

  async rewrites() {
    if (isProd) {
      return [];
    }

    return [
      {
        source: '/users/:path*',
        destination: 'http://hsga.test/users/:path*',
      },
      {
        source: '/games/:path*',
        destination: 'http://hsga.test/games/:path*',
      },
      {
        source: '/squads/:path*',
        destination: 'http://hsga.test/squads/:path*',
      },
      {
        source: '/highscores/:path*',
        destination: 'http://hsga.test/highscores/:path*',
      },
      {
        source: '/accounts/:path*',
        destination: 'http://hsga.test/accounts/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
