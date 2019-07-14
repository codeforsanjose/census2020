const express = require('express');
const app = express();
const appConfig = require('./config/main-config.js');
const routeConfig = require('./config/route-config.js');
const Config = require('./config');

appConfig.init(app, express);
routeConfig.init(app);

if (Config.app.isDev) {
  const addWebpackDevMiddleware = require('./middleware/webpack-dev-middleware');

  addWebpackDevMiddleware(app);
}

module.exports = app;
