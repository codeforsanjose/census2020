require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./webpack-paths');
const Config = require('./server/config');

module.exports = {
  entry: [
    'babel-polyfill',
    paths.entry
  ],
  output: {
    path: paths.build,
    publicPath: '/',
    filename: paths.output
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          configFile: path.resolve(__dirname, '.babelrc.js')
        }
      },
      {
        test: /\.s?css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: 'file-loader'
      },

      {
        test: /\.(webp|jpe?g|png)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.template.html')
    }),
    new webpack.EnvironmentPlugin({
      IS_EMAIL_ENABLED: Boolean(Config.mail.mailgun.apiKey)
    })
  ]
};
