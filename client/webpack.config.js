const webpack = require('webpack');

const devBuild = process.env.NODE_ENV !== 'production';

const config = require('./webpack_base.config');
config.entry = [
    './app/core/index.js'
];
config.output = {
    filename: 'webpack-bundle.js',
    path: '../app/assets/webpack'
};

module.exports = config;

if (devBuild) {
    console.log('Webpack dev build');
    module.exports.devtool = 'eval-source-map';
} else {
    config.plugins.push(
        new webpack.optimize.DedupePlugin()
    );
    console.log('Webpack production build');
}
