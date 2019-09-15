const debug = require('debug')('census2020:server:submissionController');

const submissionQueries = require('../db/queries.submission.js');
const { sendToCensusDept, sendConfirmation } = require('../mail/send-message');

module.exports = {
  index (req, res, next) {
    submissionQueries.getAllSubmissions()
      .then((submissions) => {
        let returnData = {
          message: 'Success',
          data: submissions
        };
        res.status(200).json(returnData);
      })
      .catch((err) => {
        debug(err);
        let returnData = {
          message: 'Internal Server Error',
          error: err
        };
        res.status(500).json(returnData);
      });
  },

  create (req, res, next) {
    let newSubmission = {
      language: req.body.language,
      zipCode: req.body.zipCode,
      interest: req.body.interest
    };
    submissionQueries.createSubmission(newSubmission)
      .then((submission) => {
        let returnData = {
          message: 'Success',
          data: submission
        };
        res.status(200).json(returnData);

        try {
          sendToCensusDept(req.body);
        } catch (ex) {
          debug('Error sending email to Census Department:', ex);
        }

        try {
          sendConfirmation(req.body);
        } catch (ex) {
          debug('Error sending confirmation mail:', ex);
        }
      })
      .catch((err) => {
        console.log(err);
        let returnData = {
          message: 'Internal Server Error',
          error: err
        };
        res.status(500).json(returnData);
      });
  },

  show (req, res, next) {
    submissionQueries.getSubmission(req.params.id)
      .then((submission) => {
        let returnData = {
          message: 'Success',
          data: submission
        };
        res.status(200).json(returnData);
      })
      .catch((err) => {
        debug(err);
        let returnData = {
          message: 'Internal Server Error',
          error: err
        };
        res.status(500).json(returnData);
      });
  }
};
