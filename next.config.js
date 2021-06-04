// @ts-check

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  future: {
    webpack5: true,
  },
};
