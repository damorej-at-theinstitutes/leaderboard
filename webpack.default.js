'use strict';

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

let mainConfig = {
  entry : './src/main/main.js',
  target: 'electron-main',
  output: {
    filename: 'main.bundle.js',
    path: __dirname + '/dist',
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'],
        },
      },
    ],
  },
};

let rendererConfig = {
  entry: './src/renderer/renderer.jsx',
  target: 'electron-renderer',
  output: {
    filename: 'renderer.bundle.js',
    path: __dirname + '/dist',
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'],
        }
      },
      {
        test: /\.(scss|css|sass)$/,
        use: [
          'style-loader',
          'css-loader?sourceMap',
          'sass-loader?sourceMap',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/renderer/index.html'),
    }),
  ],
};

module.exports = [mainConfig, rendererConfig];
