var _ = require('lodash');
var gulp = require('gulp');
var shell = require('gulp-shell');
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');
var jshint = require('gulp-jshint');
var del = require('del');
var browserSync = require("browser-sync");
var through = require('through2');
var crypto = require('crypto');

var webpackOptions = _.merge({}, require('./webpack.config.js'), {
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
        ASSETS_MANIFEST: undefined
    })
  ]
});

var webpackWatchOptions = _.merge({}, webpackOptions, {
  debug: true,
  watch: true
});

gulp.task('watch', ['clean'], function() {
  return gulpWebpack(webpackWatchOptions)
    .pipe(gulp.dest('build'))
    .pipe(shell('bin/to_static'));
});

gulp.task('server', function() {
  return browserSync({
    server: {
      baseDir: "./build"
    }
  });
});

function md5(str) {
  return crypto.createHash('md5').update(str).digest('hex');
}

function rev(src, callback) {
  gulp.src(src).pipe((function() {
    var contents = '';
    return through.obj(function(chunk, enc, cb) {

      if (chunk.contents) {
        contents += chunk.contents.toString();
      }
      cb();
    }, function(cb) {
      var hash = md5(contents).slice(0, 8);
      callback(hash);
      cb();
    });
  })());
}

gulp.task('clean', function(callback) {
  del(['build/**'], callback);
});

gulp.task('build', ['clean'], function(callback) {
  rev('webapp/**/*', function(hash) {
    var manifest = JSON.stringify({
      'bundle.js': 'bundle-' + hash + '.js'
    });
    var options = _.merge({}, webpackOptions, {
      output: {
        filename: 'bundle-' + hash + '.js'
      },
      plugins: [
        new webpack.DefinePlugin({
            ASSETS_MANIFEST: manifest,
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin()
      ]
    });
    process.env.ASSETS_MANIFEST = manifest;

    gulpWebpack(options)
      .pipe(gulp.dest('build'))
      .pipe(shell('bin/to_static')).on('end', function() {
        callback();
      });
  });
});

gulp.task('publish', ['build'], function() {
  return shell('bin/publish');
});

gulp.task('lint', function() {
  var jshintConfig = require('./package').jshintConfig;
  jshintConfig.lookup = false;
  return gulp.src([ __dirname + '/**/*.js', '!./node_modules/**', '!./build/**'])
             .pipe(jshint(jshintConfig))
             .pipe(jshint.reporter('default'))
             .pipe(jshint.reporter('fail'));
});


gulp.task('default', ['watch', 'server']);
