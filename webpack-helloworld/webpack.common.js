const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack'); // to access built-in plugins

module.exports = {
  entry: {
    app: './src/index.ts',
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
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
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({
      // _: 'lodash'
      // join: ['lodash', 'join'] // 能够进行tree shaking
    }),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '渐进式网络应用程序',
    }),
  ],
};
