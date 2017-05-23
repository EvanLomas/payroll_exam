'use strict';

// Dependancies
var gulp = require('gulp-help')(require('gulp')),
  plugins = require('gulp-load-plugins')();

// Variables
var serverPath = 'app/index.js';

// Tasks


/*
** Testing
*/

gulp.task('test:api', 'Run API tests', (cb) => {
  gulp
    .src([
      './app/**/*.spec.js',
    ])
    .pipe(plugins.mocha())
});

gulp.task('test', 'Run all tests', ['test:api']);


/*
** Serving
*/

gulp.task('serve', 'Starts live-reload dev server', () => {
  // Start live-reload server
  var server = plugins.liveServer.new(serverPath);
  server.start();

  // Watch files for client reload
  gulp.watch(['public/**/*'], (file) => {
    server.notify.apply(server, [file]);
  });

  // Watch files for server reload
  gulp.watch(['app/**/*.js'], (file) => {
    server.start.bind(server)();
  });
});

gulp.task('serve:dist', 'Strarts raw webserver', () => {
  new plugins.run('node '+serverPath+' --colors', {
    // cwd: 'app',
    silent: false,
    verbosity: 3
  }).exec(undefined, cb);
});