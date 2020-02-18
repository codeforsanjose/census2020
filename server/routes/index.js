const path = require('path');
const readFile = require('fs').readFileSync;
const express = require('express');
const responsiveImages = require('express-responsive-images');

const Config = require('../config');
const { build } = require('../../webpack-paths');

const imgDebug = require('debug')('census2020:server:responsive-images');

const router = new express.Router();

router.use('/api', require('./api'));

// development uses webpack-dev-middleware to serve
if (!Config.app.isDev) {
  router.use(responsiveImages({
    // express-responsive-images automatically appends staticDir to cwd
    staticDir: path.relative(process.cwd(), build),
    watchedDirectories: '/',
    fileTypeConversion: 'webp',
    directScaling: true,
    debug: imgDebug.enabled
  }));

  // Serve bundle etc.
  router.use(express.static(build));

  const indexContent = readFile(path.join(build, 'index.html'));

  // Serve other paths for React Router routes
  router.use('*', (req, res) => {
    res.type('html').send(indexContent);
  });
}

module.exports = router;
