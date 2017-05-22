var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dist_bundle.js',
    },
    plugins: [new HtmlWebpackPlugin()]
};