
const path = require('path');

// Here are different paths we want to use when building our app files
const paths = {
    entry: path.resolve('javascript', 'index.js'),
    build: path.resolve('public'),
    output: 'bundle.js',
};

module.exports = {
    mode: 'development',
    entry: [
        paths.entry
    ],
    output: {
        path: paths.build,
        filename: paths.output,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};
