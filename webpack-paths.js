const path = require('path');

// Here are different paths we want to use when building our app files
module.exports = {
  entry: path.resolve('javascript', 'index.js'),
  build: path.resolve('build'),
  output: 'bundle.js',
};
