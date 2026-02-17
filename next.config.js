const { withSentryConfig } = require("@sentry/nextjs");

const moduleExports = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.google.com" },
    ],
  },
  output: "standalone",
};

module.exports = withSentryConfig(moduleExports, {
  silent: true,
  hideSourceMaps: true,
  widenClientFileUpload: true,
  disableLogger: true,
});
