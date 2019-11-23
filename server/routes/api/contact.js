const express = require('express');
const debug = require('debug')('census2020:server:routes:contact');

const { sendToCensusDept } = require('../../mail/send-message');

const router = new express.Router();

router.route('/')
  .post(
    express.json(),
    (req, res, next) => {
      try {
        sendToCensusDept(req.body);
        res.end();
      } catch (err) {
        debug('Error sending email to Census Department:', err);
        next(err);
      }
    }
  );

module.exports = router;
