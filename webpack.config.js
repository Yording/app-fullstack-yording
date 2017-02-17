"use strict";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8001";

module.exports = {
    entry: [
        './src/app.js', // your app's entry point
        './src/assets/sass/styles.scss'
    ],
    devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components|public\/)/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded'),
                exclude: ['node_modules']
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "file-loader"
            }, {
                test: /\.(woff|woff2)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "url-loader?prefix=font/&limit=5000"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            }, {
                test: /\.gif/,
                exclude: /(node_modules|bower_components)/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            }, {
                test: /\.jpg/,
                exclude: /(node_modules|bower_components)/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            }, {
                test: /\.png/,
                exclude: /(node_modules|bower_components)/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            }
        ]
    },
    devServer: {
        contentBase: "./public",
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("app.css", {allChunks: true}),
        new DashboardPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            files: {
                css: ['app.css'],
                js: ["bundle.js"]
            }
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    }
};