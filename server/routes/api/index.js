const express = require('express');
const Config = require('../../config');

const router = new express.Router();

if (Config.mail.mailgun.apiKey) {
  router.use('/contact', require('./contact'));
}

module.exports = router;
