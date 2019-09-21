const path = require('path');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.dev.config');

const compiler = webpack(webpackConfig);

module.exports = (app) => {
  const middleware = devMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  });

  const initPromise = new Promise(
    (resolve) => middleware.waitUntilValid(
      () => {
        const index = middleware.fileSystem.readFileSync(
          path.resolve(
            webpackConfig.output.path,
            middleware.context.options.index || './index.html'
          ),
          'utf8'
        );

        // Serve index file for all routes not already handled
        // (makes sure this doesn't break when at a React Router route)
        app.use(
          (req, res) => {
            res.type('text/html').send(index);
          }
        );

        resolve();
      }
    )
  );

  app.use(
    middleware,
    hotMiddleware(compiler)
  );

  return initPromise;
};
