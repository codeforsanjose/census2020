const express = require('express');
const appConfig = require('./config/main-config.js');
const Config = require('./config');
const router = require('./routes');

const app = express();

appConfig.init(app, express);
app.use(router);

async function init () {
  if (Config.app.isDev) {
    const addWebpackDevMiddleware = require('./middleware/webpack-dev-middleware');

    await addWebpackDevMiddleware(app);
  }

  // 404 handler
  app.use(
    (req, res, next) => {
      const err = new Error('Not found');
      err.status = 404;
      next(err);
    }
  );

  // General error handler
  app.use(
    (err, req, res, next) => {
      const status = err.status || 500;
      console.error(err);
      res.status(status).send(err.message);
    }
  );
}

init();

module.exports = app;
