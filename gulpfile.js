var gulp = require('gulp'),
  plugins = require('gulp-load-plugins')();

gulp.task('test', (cb) => {
  gulp
    .src([
      './app/**/*.spec.js',
    ])
    .pipe(plugins.mocha())
});