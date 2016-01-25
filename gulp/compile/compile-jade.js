'use strict'

// imports
const paths = require(global.gulp_config_path)
const gulp = require('gulp')
const jade = require('gulp-jade')

/**
 * Compile Task - SCSS
 * copies over project files to the build directory
 */
gulp.task('compile-jade', function () {
  return gulp.src(paths.src_path + '/**/*.jade')
    .pipe(jade({pretty:true}))
    .pipe(gulp.dest(paths.tmp_path))
})


