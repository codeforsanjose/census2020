const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/submissionController');

router.post('/submission/create', submissionController.create);

module.exports = router;
