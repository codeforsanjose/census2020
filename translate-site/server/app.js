const express = require('express');

const app = express();

app.use('/', require('./routes'));

app.enable('trust proxy');

module.exports = app;
