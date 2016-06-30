'use strict'
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "src/app"),
    devTool: debug ? "inline-sourcemap" : null,
    entry: './app.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: 'node_modules',
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            }
        ]
    },
    vendor: [
        'angular/angular',
        'angular-ui-router/release/angular-ui-router.min',
    ],
    plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        }),
        new ngAnnotatePlugin({
            add: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            compress: false,
            output: {
                beautify: true,
                comments: false
            }
        })
  ],
    output: {
        path: __dirname + '/src/app',
        filename: 'bundle.js'
    }
};