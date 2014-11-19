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


gulp.task('default', ['watch']);
