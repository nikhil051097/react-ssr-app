const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Inform target bundle is for node
    target: 'node',

    // Mode
    mode: 'development',

    //ENtry file
    entry: './src/index.js',

    // Output
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals : [webpackNodeExternals()]
};  

module.exports = merge(baseConfig, config);