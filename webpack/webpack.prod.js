var rules = require('./rules');
var extensions = require('./extensions');
var path = require('path');
var ExtractCSS = require('extract-text-webpack-plugin');
var UglifyJS = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: '/',
    filename: 'index.js',
    path: path.resolve('dist')
  },
  resolve: {
    extensions: extensions
  },
  module: {
    rules: rules
  },
  plugins: [
    new ExtractCSS('index.css'),
    new UglifyJS()
  ],
  watch: true
}
