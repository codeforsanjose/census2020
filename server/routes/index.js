const path = require('path');
const readFile = require('fs').readFileSync;
const express = require('express');

const Config = require('../config');
const { build } = require('../../webpack-paths');

const router = new express.Router();

router.use('/api', require('./api'));

// development uses webpack-dev-middleware to serve
if (!Config.app.isDev) {
  // Serve bundle etc.
  router.use(express.static(build));
  if (Config.app.serveTranslateAdmin) {
    const translateSitePath = path.resolve(__dirname, '..', '..', 'translate-site', 'dist');
    console.log('serving translate admin app from path', translateSitePath);
    router.use('/_/translations', express.static(translateSitePath));
  }

  const indexContent = readFile(path.join(build, 'index.html'));

  // Serve other paths for React Router routes
  router.use('*', (req, res) => {
    res.type('html').send(indexContent);
  });
}

module.exports = router;
