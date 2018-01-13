var path = require('path');
var webpack = require('webpack');
var webpackDevConfig = require('./webpack.dev');
var express = require('express');
var app = express();
var compiler = webpack(webpackDevConfig);
compiler.watch({}, function(err, stats) {
  console.log(stats.toString());
});
app.use(express.static('build'));
app.listen(9001);
