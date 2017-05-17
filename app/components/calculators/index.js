'use strict';

var path = require('path');
var requireall = require('../require_all');

// Dynamically include all sub-folders
module.exports = requireAll(__dirname);