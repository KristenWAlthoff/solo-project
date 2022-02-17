const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname, 'client/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
    },
    module: {
        rules: [{
            test: /.js|jsx$/,
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
        new HWP ({
            title: 'Development',
            template: path.join(__dirname, 'client/index.html')}
        )
    ],
    devServer: {
        static: {
            publicPath: '/build',
            directory: path.resolve(__dirname, 'dist')
        },
        //need localhost:3000 proxy server??
        headers: { 'Access-Control-Allow-Origin': '*' },
        proxy: {
            '/api': 'http://localhost:3000',
            secure: false,
        }
    }
};