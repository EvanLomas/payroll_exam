'use strict';

var path = require('path');
var requireAll = require('../require_all');

// Dynamically include all sub-folders
module.exports = requireAll(__dirname);