var gulp = require('gulp');
var gutil = require("gulp-util");
var run = require('gulp-run');
var webpack = require('gulp-webpack');
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
  webpack(webpackWatchOptions, null, function(err, stats) {
    if (!err) {
      run('bin/to_static').exec();
    }
  }).pipe(gulp.dest('build'));
});

gulp.task('build', function(callback) {
  webpack(webpackOptions, null, function(err, stats) {
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


gulp.task('default', ['watch']);
