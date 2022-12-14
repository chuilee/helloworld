const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(
  merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      static: './dist',
      port: 8080,
      open: true,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|svg|jpe?g|gif|webp)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 6192,
              },
            },
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true, // webpack@1.x
                disable: true, // webpack@2.x and newer
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader'],
        },
      ],
    },
  })
);
