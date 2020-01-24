const express = require('express');
const request = require('request-promise-native');
const router = express.Router();

const GITHUB_APP_ID = process.env.CENSUS2020_APP_ID;
const GITHUB_APP_SECRET = process.env.CENSUS2020_APP_SECRET;

router.route('/').get((req, res, next) => {
  const redirectUrl = new URL(req.originalUrl, `http://${req.headers.host}`);
  redirectUrl.pathname += '/callback';
  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.set('client_id', GITHUB_APP_ID);
  url.searchParams.set('redirect_uri', redirectUrl.toString());
  res.redirect(url);
});

router.route('/callback').get(async (req, res, next) => {
  const { code } = req.query;
  try {
    const response = await request.post('https://github.com/login/oauth/access_token', {
      body: {
        code,
        client_id: GITHUB_APP_ID,
        client_secret: GITHUB_APP_SECRET
      },
      headers: {
        Accept: 'application/json'
      },
      json: true
    });
    const url = new URL(req.baseUrl.replace(/\/auth\/?$/, ''), `http://${req.headers.host}`);
    url.searchParams.set('access_token', response.access_token);
    res.redirect(url);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
