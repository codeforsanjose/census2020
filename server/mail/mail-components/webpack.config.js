const path = require('path');
const baseWebpackConfig = require('../../../webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

baseWebpackConfig.mode = process.env.NODE_ENV || 'development';

baseWebpackConfig.context = __dirname;

baseWebpackConfig.entry = [
  'babel-polyfill',
  path.join(__dirname, 'index.js')
];

baseWebpackConfig.output = {
  path: path.resolve(__dirname, 'compiled'),
  libraryTarget: 'commonjs2'
};

baseWebpackConfig.target = 'node';

baseWebpackConfig.plugins = (baseWebpackConfig.plugins || []).filter(
  (plugin) => !(plugin instanceof HtmlWebpackPlugin)
);

if (!baseWebpackConfig.resolve) {
  baseWebpackConfig.resolve = {};
}
baseWebpackConfig.resolve.alias = Object.assign(
  {},
  baseWebpackConfig.resolve.alias,
  {
    '@@i18n': path.resolve(__dirname, '..', '..', '..', 'i18n'),
    '@@client': path.resolve(__dirname, '..', '..', '..', 'client')
  }
);

baseWebpackConfig.externals = [
  /node_modules/
];

module.exports = baseWebpackConfig;
