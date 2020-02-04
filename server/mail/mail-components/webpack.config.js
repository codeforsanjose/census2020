const path = require('path');
const baseWebpackConfig = require('../../../webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

for (const rule of baseWebpackConfig.module.rules) {
  if (rule.test.toString() === /\.s?css$/.toString()) {
    rule.loaders = [
      // This removes the CSS from the compiled components; we are not
      // currently doing anything with the resulting CSS, since it's
      // used in email bodies, this is just removing the CSS.
      MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader'
    ];
  }
}

baseWebpackConfig.target = 'node';

baseWebpackConfig.plugins = (baseWebpackConfig.plugins || []).filter(
  (plugin) => !(plugin instanceof HtmlWebpackPlugin)
);

baseWebpackConfig.plugins.push(new MiniCssExtractPlugin());

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
