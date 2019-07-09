module.exports = {
  init (app) {
    const staticRoutes = require('../routes/static');
    const submissionRoutes = require('../routes/submissions');

    app.use(staticRoutes);
    app.use(submissionRoutes);
  }
};
