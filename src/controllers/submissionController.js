const submissionQueries = require('../db/queries.submission.js');
const mongoose = require('mongoose');
const Mailgun = require('mailgun').Mailgun;
const mg = new Mailgun(process.env.mgApi); //Need Mailgun API key

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
      mg.sendText('sender@example.com',
        ['recipient@example.com'],
        'Email Subject',
        `Email message, ${req.body.name}, ${req.body.phone}, ${req.body.email} etc`,
        'Origin server (if needed)',
        (err) => {
          if (err) {
            console.log('Mailgun error:', err)
          }
        }
      )
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
