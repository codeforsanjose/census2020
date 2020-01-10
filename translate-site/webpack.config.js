const path = require('path');
const webpack = require('webpack');

const config = require('../webpack.config');

config.entry = [
  'babel-polyfill',
  path.join(__dirname, 'client', 'index.js')
];
config.output.path = path.join(__dirname, 'dist');
config.mode = 'development';
config.devtool = 'eval-source-map';
config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
);

module.exports = config;
