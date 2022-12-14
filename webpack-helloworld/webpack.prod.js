const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');
const WorkboxPlugin = require('workbox-webpack-plugin');
const webpack = require('webpack');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(
  merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.HashedModuleIdsPlugin(),
      new BundleAnalyzerPlugin(),
      new WorkboxPlugin.GenerateSW({
        // ?????????????????????????????? ServiceWorkers
        // ????????????????????????????????? ServiceWorkers
        clientsClaim: true,
        skipWaiting: true,
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].[hash].css',
        chunkFilename: '[name].[hash].css',
      }),
    ],
  })
);
