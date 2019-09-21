const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '..', '.env')
});

const Config = require('./config');

const app = require('./app');
const http = require('http');

const port = normalizePort(Config.app.port);
app.set('port', port);

const server = http.createServer(app);

server.listen(port);

function normalizePort (val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  } else if (port >= 0) {
    return port;
  } else {
    return false;
  }
}

server.on('listening', () => {
  console.log(`Server is listening for requests on port ${server.address().port}`);
});
