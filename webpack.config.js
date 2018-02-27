const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

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
    IS_PRODUCTION ?  new CleanWebpackPlugin(['docs']) : null,
    IS_PRODUCTION ? null : new webpack.NamedModulesPlugin(),
    IS_PRODUCTION ? null : new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
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
