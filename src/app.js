const express = require('express');
const app = express();
const appConfig = require('./config/main-config.js');
const routeConfig = require('./config/route-config.js');

appConfig.init(app, express);
routeConfig.init(app);

if (process.env.NODE_ENV === 'development') {
  const addWebpackDevMiddleware = require('./middleware/webpack-dev-middleware');

  addWebpackDevMiddleware(app);
}

module.exports = app;
