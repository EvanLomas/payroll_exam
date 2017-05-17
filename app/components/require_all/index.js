'use strict';

var fs = require('fs');

module.exports = (srcpath) => {
  if(!srcpath) { return; }
  var output = {};

  folders = fs
    .readdirSync(srcpath)
    .filter((file) => fs.lstatSync(path.join(srcpath, file)).isDirectory());

  folders.forEach((key) => {
    output[key] = require(path.join(srcpath, file));
  });

  return output;
};