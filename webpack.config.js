var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                loader: "babel-loader",
            }, {
                test: /\.css$/, // Only .css files  //when develop choose css or scss
                loader: 'style-loader!css-loader' // Run both loaders
            },{
                test: /\.scss$/, // Only .css files
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
};