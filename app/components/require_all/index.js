'use strict';

var fs = require('fs');
var path = require('path');

module.exports = (srcpath) => {
  if(!srcpath) { return; }
  var output = {};

  var folders = fs
    .readdirSync(srcpath)
    .filter((file) => {
      return fs.lstatSync(path.join(srcpath, file)).isDirectory();
    });

  folders.forEach((key) => {
    output[key] = require(path.join(srcpath, key));
  });

  return output;
};