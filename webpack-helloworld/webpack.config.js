const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack'); // to access built-in plugins
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: "production",
  entry: {
    print: "./src/print.js",
    app: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "管理输出",
    }),
    new WebpackManifestPlugin()
  ],
};
