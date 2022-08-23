var path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-numbers.js",
    libraryTarget: "umd",
    // 有以下几种方式暴露 library：
    // 变量：作为一个全局变量，通过 script 标签来访问（libraryTarget:'var'）。
    // this：通过 this 对象访问（libraryTarget:'this'）。
    // window：在浏览器中通过 window 对象访问（libraryTarget:'window'）。
    // UMD：在 AMD 或 CommonJS require 之后可访问（libraryTarget:'umd'）。
    globalObject: "this",
    // libraryExport: 'default',
    library: "webpackNumbers",
  },
  externals: {
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [new webpack.ProgressPlugin(), new CleanWebpackPlugin()],
};
