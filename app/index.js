'use strict';

// Dependancies
var path = require('path');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

// Variables
var PORT = process.env.port || 8000;
var ENV = process.env.node_env || 'dev';

// Server setup
var app = express();
app.use(bodyParser.json());
var server = require('http').createServer(app);

// Live client reload for development purposes
if(ENV == 'dev') {
  app.use(require('connect-livereload')());
}

// Dynamically generate API endpoints from API/index.js content
app.post('/api/payslip', require('./api/payslip'));
app.post('/api/payslip/save', require('./api/save'));

// Route page
app
  .route('/')
  .get((req, res) => {
    res.sendFile(path.resolve('public/index.html'));
  });

// Start Server
// NOTE: In a real-world scenario this would be served on a designated domain as well for security
app.listen(PORT);

console.info('Server started -> http://localhost:'+PORT+'/');