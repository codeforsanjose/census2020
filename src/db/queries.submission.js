const Submission = require('./models/submission');

module.exports = {
  getAllSubmissions () {
    return Submission.find();
  },

  createSubmission (newSubmission) {
    return Submission.create(newSubmission);
  },

  getSubmission (id) {
    return Submission.findById(id);
  }

};
