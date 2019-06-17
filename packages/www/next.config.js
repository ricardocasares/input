const path = require("path");
const withImages = require("next-images");
const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript(
  withImages({
    inlineImageLimit: 1446384,
    target: "serverless",
    webpack(config) {
      config.resolve.alias["@"] = path.join(__dirname, "src");
      return config;
    },
    env: {
      INPUT_GA_ID: process.env.INPUT_GA_ID
    }
  })
);
