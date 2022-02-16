const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, 'client/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                // options: {
                //     presets: ['@babel/preset-env', '@babel/preset-react']
                // },
            },
        }],
    },
    plugins: [
        new HWP (
            {template: path.join(__dirname, 'client/index.html')}
        )
    ],
    //need localhost:3000 proxy server??
}