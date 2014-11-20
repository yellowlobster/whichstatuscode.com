var gulp = require('gulp');
var run = require('gulp-run');
var webpack = require('gulp-webpack');
var jshint = require('gulp-jshint');
var _ = require('lodash');

var webpackOptions = _.merge({}, require('./webpack.config.js'), {
  output: {
    filename: 'bundle.js'
  }
});

var webpackWatchOptions = _.merge({}, webpackOptions, {
  debug: true,
  watch: true
});

gulp.task('watch', function() {
  webpack(webpackWatchOptions, null, function(err) {
    if (!err) {
      run('bin/to_static').exec();
    }
  }).pipe(gulp.dest('build'));
});

gulp.task('build', function(callback) {
  webpack(webpackOptions, null, function(err) {
    if (!err) {
      run('bin/to_static').exec(function(err) {
        callback(err);
      });
    } else {
      callback(err);
    }
  }).pipe(gulp.dest('build'));
});

gulp.task('publish', ['build'], function(callback) {
  run('bin/publish').exec(function(err) {
    callback(err);
  });
});

gulp.task('lint', function() {
  var jshintConfig = require('./package').jshintConfig;
  jshintConfig.lookup = false;
  return gulp.src([ __dirname + '/**/*.js', '!./node_modules/**', '!./build/**'])
             .pipe(jshint(jshintConfig))
             .pipe(jshint.reporter('default'))
             .pipe(jshint.reporter('fail'));
});


gulp.task('default', ['watch']);
