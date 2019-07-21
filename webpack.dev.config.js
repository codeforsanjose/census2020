const webpack = require('webpack');

const config = require('./webpack.config');

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
);

config.entry.unshift('webpack-hot-middleware/client');

module.exports = config;
