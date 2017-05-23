'use strict';

// Dependancies
var path = require('path');
var http = require('http');
var express = require('express');
var APIs = require('./api');

// Variables
var PORT = process.env.port || 8000;
var ENV = process.env.node_env || 'dev';

// Server setup
var app = express();
var server = require('http').createServer(app);

// Live client reload for development purposes
if(ENV == 'dev') {
  app.use(require('connect-livereload')());
}

// Dynamically generate API endpoints from API/index.js content
for(var key in APIs) {
  app.use('/api/'+key, APIs[key]);
}

// Node modules
app
  .route('/node_modules/*')
  .get((req, res) => {
    res.sendFile(path.resolve('node_modules',app.get('appPath')));
  });

// Route page
app
  .route('/')
  .get((req, res) => {
    res.sendFile(path.resolve('public/index.html'));
  });

// Start Server
// NOTE: In a real-world scenario this would be served on a designated domain as well for security
app.listen(PORT);

console.info('Server started on port '+PORT);