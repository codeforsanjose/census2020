const app = require('./app');
const http = require('http');
const mongoose = require('mongoose');

const uri = (process.env.mongoSecret);
mongoose.connect(uri, {useNewUrlParser: true, useFindAndModify: false})
.then(() => {
})
.catch((err) => {
  console.log(err);
});

const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

const server = http.createServer(app);

server.listen(port);

function normalizePort(val) {
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
})
