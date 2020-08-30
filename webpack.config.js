const path = require('path');

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'index.js'
    }
}
