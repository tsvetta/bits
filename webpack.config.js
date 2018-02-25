const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ENV_DEVELOPMENT = true;

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    host: '0.0.0.0',
    port: 9000,
    compress: true,
    // open: true,
    hot: true,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(['docs']),
    ENV_DEVELOPMENT ? new webpack.NamedModulesPlugin() : null,
    ENV_DEVELOPMENT ? new webpack.HotModuleReplacementPlugin() : null,
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loaders: [
          'html-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
              convertToAbsoluteUrls: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]_[hash:base64:5]',
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loaders: [
          'file-loader',
        ],
      },
    ],
  },
};
