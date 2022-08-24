const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack'); // to access built-in plugins

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      // {
      //   test: require.resolve('./src/index.js'),
      //   use: [{
      //     loader: "imports-loader",
      //     options: {
      //       wrapper: "window"
      //     }
      //   }]
      // },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      // _: 'lodash'
      join: ['lodash', 'join'] // 能够进行tree shaking
    }),
    new HtmlWebpackPlugin({
      title: "生产环境",
    })
  ],
};
