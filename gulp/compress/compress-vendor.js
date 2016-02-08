'use strict'

// import references
const paths = require(global.gulp_config_path)
const gulp = require('gulp')
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

/**
 * Compress Vendor JavaScript
 */
gulp.task('compress-vendor', function () {
  return gulp.src([paths.tmp_path + '/vendor/**/*'])
  	.pipe(sourcemaps.init())
    .pipe(uglify())
	.pipe(sourcemaps.write('../maps', {addComment: true}))
    .pipe(gulp.dest(paths.tmp_path + '/vendor'))
})
