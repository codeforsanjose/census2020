const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '..', '.env')
});

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Config = require('../server/config');

module.exports = {
  entry: [
    'babel-polyfill',
    './client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/_/translations'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          configFile: path.resolve(__dirname, '..', '.babelrc.js')
        }
      },
      {
        test: /\.s?css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.(eot|svg|otf|ttf|woff|woff2|png|jpe?g)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.template.html')
    }),
    new webpack.DefinePlugin({
      'process.env.GITHUB_REPO': JSON.stringify(
        Config.github.isEnabled
          ? Config.github.repository
          : null
      )
    })
  ],

  devtool: 'eval-source-map',

  devServer: {
    proxy: {
      '/_/translations/auth': {
        target: 'http://localhost:3000/'
      }
    }
  }
};
