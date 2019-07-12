const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.dev.config');

const compiler = webpack(webpackConfig);

module.exports = (app) => {
  app.use(
    middleware(compiler, {
      publicPath: webpackConfig.output.publicPath
    })
  );

  app.use(hotMiddleware(compiler));
};
