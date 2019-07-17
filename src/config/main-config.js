require('dotenv').config();
const path = require('path');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

module.exports = {
  init (app) {
    app.use(logger('dev'));
    app.use(cors());
    app.use(express.static(path.join(__dirname, '..', 'assets')));
  }
};
