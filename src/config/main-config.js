require('dotenv').config();
const path = require('path');
const logger = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser');

module.exports = {
  init(app, express) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(logger('dev'));
    app.use(express.json());
    app.use(cors());
    app.use(express.static(path.join(__dirname, '..', 'assets')));
    app.use((req, res, next) => {
      res.locals.currentUser = req.user;
      next();
    })
  }
}
