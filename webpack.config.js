const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.(jpg|png)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader"
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/images', to: './dist' },
      ],
    }),
    new CleanWebpackPlugin()
  ]
}