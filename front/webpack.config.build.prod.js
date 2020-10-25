const webpack = require("webpack");
const baseConfig = require("./webpack.config");

/** @type import('webpack').Configuration */
module.exports = {
  ...baseConfig,
  performance: { hints: false },
};
