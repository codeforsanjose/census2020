require('dotenv').config();
const path = require('path');
const logger = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');
const flash = require('express-flash');

module.exports = {
  init(app, express) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(logger('dev'));
    app.use(express.json());
    app.use(cors());
    app.use(express.static(path.join(__dirname, '..', 'assets')));
    app.use(expressValidator());
    app.use(session({
      secret: process.env.cookieSecret,
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 1.21e+9 }
    }));
    app.use(flash());
    app.use((req, res, next) => {
      res.locals.currentUser = req.user;
      next();
    })
  }
}
