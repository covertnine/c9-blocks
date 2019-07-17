const path = require('path');

module.exports = {
    entry: {
        frontend: './src/frontend.js',
        'register-category-icon': './src/register-category-icon.js'
    },
    loader: {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'blocks.[name].build.js'
    }
  }