const express = require('express');
const debug = require('debug')('census2020:server:routes:contact');

const { sendToCensusDept, sendConfirmation } = require('../../mail/send-message');

const router = new express.Router();

router.route('/')
  .post(
    express.json(),
    async (req, res, next) => {
      try {
        await sendToCensusDept(req.body);
        sendConfirmation(req.body);
        res.end();
      } catch (err) {
        debug('Error sending email to Census Department:', err);
        next(err);
      }
    }
  );

module.exports = router;
