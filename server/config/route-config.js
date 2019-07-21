module.exports = {
  init (app) {
    const router = require('../routes');

    app.use(router);
  }
};
