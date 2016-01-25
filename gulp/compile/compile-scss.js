'use strict'

// imports
const paths = require(global.gulp_config_path)
const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')

/**
 * Compile Task - SCSS
 * copies over project files to the build directory
 */
gulp.task('compile-sass', function () {
  // console.log(paths.src_path + '/**/*.scss')
  return gulp.src(paths.src_path + '/**/*.scss')
    .pipe(sass({
      outputStyle: 'compact',
      // allows sass files to include without the path. ex: "@import helpers" as apposed to "@import /_scss/helpers"
      includePaths: [
        paths.src_path + '/_scss/helpers',
        paths.src_path + '/_scss/partials'
      ]})
      .on('error', sass.logError))
    .pipe(concat('src.css'))
    .pipe(gulp.dest(paths.tmp_path + '/css'))
})


