const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  language: String,
  zipCode: String,
  interest: String
})

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
