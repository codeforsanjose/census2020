const path = require('path');
const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

// Here I create an express app
// Express is a library that helps us handle with server requests
const app = express();

// We tell the Express app to use the bodyParser to parse HTTP bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// We use morgan to log all requests to the server in the terminal
// TODO fix for NODE_ENV
app.use(logger('dev'));

// We tell express to use the /bundledFiles directory to serve static files
app.use(express.static(path.resolve('public')));

app.set('view engine', 'ejs');

app.all('*', (req, res) => {
	res.render('index', {});
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log('Express server is up on port ' + port);
});
