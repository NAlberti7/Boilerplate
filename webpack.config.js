const path = require('path');
module.exports = {
    entry: {
        app: [
            "@babel/polyfill",
            './src/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'build.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname,"public"),
        publicPath: "/scripts/",
        port: 4000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map'
};