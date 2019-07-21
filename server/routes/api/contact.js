const express = require('express');

const router = new express.Router();

const submissionController = require('../../controllers/submissionController');

router.route('/')
  .post(
    express.json(),
    submissionController.create
  );

module.exports = router;
