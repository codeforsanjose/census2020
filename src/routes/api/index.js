const express = require('express');

const router = new express.Router();

router.use('/contact', require('./contact'));

module.exports = router;
