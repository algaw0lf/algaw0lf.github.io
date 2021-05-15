const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");

module.exports = {
  target: 'web',
  entry: './src/_bundle/main.js',
  mode: process.env.NODE_ENV,
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    // new CompressionPlugin({
    //   test: /\.(js|css|html|svg)$/,
    //   minRatio: 0,
    // }),
    new CompressionPlugin({
      // algorithm: "gzip",
      test: /\.(js|css|html|svg)$/,
      // compressionOptions: {
      //   params: {
      //     [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
      //   },
      // },
      // threshold: 10240,
      // minRatio: 0.8,
      // deleteOriginalAssets: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pcss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader?url=false', 'postcss-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'assets'),
    filename: 'main.js',
    library: 'wp'
  }
}
