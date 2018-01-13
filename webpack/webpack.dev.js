var rules = require('./rules');
var extensions = require('./extensions');
var path = require('path');
var ExtractCSS = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: '/',
    filename: 'index.js',
    path: path.resolve('build')
  },
  resolve: {
    extensions: extensions
  },
  module: {
    rules: rules
  },
  plugins: [
    new ExtractCSS('index.css')
  ],
  watch: true
}
