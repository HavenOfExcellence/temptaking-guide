const webpack = require("webpack");

module.exports = {
  basePath: "/temptaking-guide",
  assetPrefix: "/temptaking-guide/",
  // webpack: (config) => {
  //   config.plugins.push(
  //     new webpack.DefinePlugin({
  //       "process.env.ASSET_PREFIX": JSON.stringify('temptaking-guide'),
  //     })
  //   );

  //   return config;
  // },
};
