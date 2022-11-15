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
  cache: {
    // 将缓存类型设置为文件系统
    type: 'filesystem',
    buildDependencies: {
      /* 将你的 config 添加为 buildDependency，以便在改变 config 时获得缓存无效 */
      config: [__filename],
      /* 如果有其他的东西被构建依赖，你可以在这里添加它们 */
      /* 注意，webpack.config，加载器和所有从你的配置中引用的模块都会被自动添加 */
    },
    // 指定缓存的版本
    version: '1.0',
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
