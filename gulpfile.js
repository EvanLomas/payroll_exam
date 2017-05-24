'use strict';

// Dependancies
var gulp = require('gulp-help')(require('gulp')),
  plugins = require('gulp-load-plugins')();

// Variables
var serverPath = 'app/index.js';
var _server;

// Tasks


/*
** Testing
*/

gulp.task('test:api', 'Run API tests', () => {
  gulp
    .src([
      './app/**/*.spec.js',
    ])
    .pipe(plugins.mocha())
});

gulp.task('test', 'Run all tests', ['test:api']);

/*
** File watchers
*/

gulp.task('watch', 'Watches files and automatically triggers test, server restart, etc.', () => {
  // Watch files for client reload
  gulp.watch(['public/**/*'], (file) => {
    if(!_server) { return; }
    _server.notify.apply(_server, [file]);
  });

  // Automatically run mocha tests on backend code on change (should be disabled or segmented in a larger app)
  gulp.watch(['app/**/*.js'], ['test:api']);

  // Watch files for server reload
  gulp.watch(['app/**/*.js'], (file) => {
    if(!_server) { return; }
    _server.start.bind(_server)();
  });
});

/*
** Serving
*/

gulp.task('serve', 'Starts live-reload dev server', ['watch'], () => {
  // Start live-reload server
  _server = plugins.liveServer.new(serverPath);
  _server.start();
});

gulp.task('serve:dist', 'Strarts raw webserver', () => {
  new plugins.run('node '+serverPath+' --colors', {
    // cwd: 'app',
    silent: false,
    verbosity: 3
  }).exec(undefined, cb);
});