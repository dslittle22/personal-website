const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      const originalEntry = config.entry;

      config.entry = async () => {
        const entries = { ...(await originalEntry()) };
        // These scripts can import components from the app and use ES modules
        entries["scripts/rss.js"] = "./scripts/rss.js";
        return entries;
      };
    }

    return config;
  },
};

module.exports = nextConfig;
