const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /.js$/,
            use: 'babel-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/index.html'
        })
    ]
}
