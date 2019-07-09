
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./webpack-paths');

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    paths.entry
  ],
  output: {
    path: paths.build,
    filename: paths.output
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.template.html')
    })
  ],
  devtool: 'eval-source-map'
};
