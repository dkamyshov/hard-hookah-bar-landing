var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var webpackProdConfig = require('./webpack.prod');
var archiver = require('archiver');

var compiler = webpack(webpackProdConfig);

compiler.run((err, stats) => {
  if(err) {
    console.error(err);
    return;
  }

  console.log(stats.toString()+'\n');

  var output = fs.createWriteStream('hard-hookah-bar-landing.zip');

  output.on('close', function() {
    console.log('Successefully wrote .zip with '+archive.pointer()+' total bytes');
  });

  var archive = archiver('zip', {
    zlib: { level: 9 }
  });
  
  archive.pipe(output);
  archive.directory('dist/', false);
  archive.finalize();
});
