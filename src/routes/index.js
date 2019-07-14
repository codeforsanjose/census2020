const path = require('path');
const readFile = require('fs').readFileSync;
const express = require('express');

const { build } = require('../../webpack-paths');

const router = new express.Router();

router.use('/api', require('./api'));

const indexContent = readFile(path.join(build, 'index.html'));

// development uses webpack-dev-middleware to serve
if (process.env.NODE_ENV !== 'development') {
  // Serve bundle etc.
  router.use(express.static(
    build
  ));

  // Serve other paths for React Router routes
  router.use('*', (req, res) => {
    res.type('html').send(indexContent);
  });
}

module.exports = router;
