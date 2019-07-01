const submissionQueries = require('../db/queries.submission.js');
const mongoose = require('mongoose');
const Mailgun = require('mailgun').Mailgun;
const mg = new Mailgun(process.env.mgApi); //Need Mailgun API key

module.exports = {
  index(req, res, next) {
    submissionQueries.getAllSubmissions()
    .then((submissions) => {
      let returnData = {
        message: 'Success',
        data: submissions
      };
      res.status(200).json(returnData)
    })
    .catch((err) => {
      console.log(err)
      let returnData = {
        message: 'Internal Server Error',
        error: err
      };
      res.status(500).json(returnData)
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
        message: 'Success',
        data: submission
      };
      res.status(200).json(returnData)
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
        message: 'Internal Server Error',
        error: err
      };
      res.status(500).json(returnData)
    })
  },

  show(req, res, next) {
    submissionQueries.getSubmission(req.params.id)
    .then((submission) => {
      let returnData = {
        message: 'Success',
        data: submission
      };
      res.status(200).json(returnData)
    })
    .catch((err) => {
      console.log(err)
      let returnData = {
        message: 'Internal Server Error',
        error: err
      };
      res.status(500).json(returnData)
    })
  },
}
