const path = require("path");
const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript({
  target: "serverless",
  webpack(config) {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
  env: {
    INPUT_GA_ID: process.env.INPUT_GA_ID
  }
});
