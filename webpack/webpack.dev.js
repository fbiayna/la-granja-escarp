/* eslint-disable @typescript-eslint/no-var-requires */
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    static: './dist',
    port: 4000,
    open: true,
  },
});
