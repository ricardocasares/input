const path = require("path");
const analyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZER === "true"
});

module.exports = analyzer({
  target: "serverless",
  webpack(config) {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
  env: {
    INPUT_GA_ID: process.env.INPUT_GA_ID
  }
});
