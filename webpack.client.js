const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    
    // Mode
    mode: 'development',

    //ENtry file
    entry: './src/client/client.js',

    // Output
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};  

module.exports = merge(baseConfig, config);