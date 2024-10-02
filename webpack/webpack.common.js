/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/application/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif|webp|ico)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/application/index.html',
      favicon: './src/application/assets/logos/favicon.ico',
    }),
  ],
};
