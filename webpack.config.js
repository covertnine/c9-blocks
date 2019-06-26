const path = require('path');

module.exports = {
    entry: './src/frontend.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'blocks.front.build.js'
    }
  }