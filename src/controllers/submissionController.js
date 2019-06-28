const submissionQueries = require('../db/queries.submission.js');
const mongoose = require('mongoose');

module.exports = {
  index(req, res, next) {
    submissionQueries.getAllSubmissions()
    .then((submissions) => {
      let returnData = {
        statusCode: 200,
        message: 'Success',
        data: submissions
      };
      res.json(returnData)
    })
    .catch((err) => {
      console.log(err)
      let returnData = {
        statusCode: 400,
        message: 'Bad Request',
        data: err
      };
      res.json(returnData)
    })
  },

  create(req, res, next) {
    let newSubmission = {
      language: req.body.language,
      zipCode: req.body.zipCode,
      interest: req.body.interest
    }
    submissionQueries.createSubmission(newSubmission)
    .then((submission) => {
      let returnData = {
        statusCode: 200,
        message: 'Success',
        data: submission
      };
      res.json(returnData)
    })
    .catch((err) => {
      console.log(err)
      let returnData = {
        statusCode: 400,
        message: 'Bad Request',
        data: err
      };
      res.json(returnData)
    })
  },

  show(req, res, next) {
    submissionQueries.getSubmission(req.params.id)
    .then((submission) => {
      let returnData = {
        statusCode: 200,
        message: 'Success',
        data: submission
      };
      res.json(returnData)
    })
    .catch((err) => {
      console.log(err)
      let returnData = {
        statusCode: 400,
        message: 'Bad Request',
        data: err
      };
      res.json(returnData)
    })
  },
}
