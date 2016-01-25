'use strict'

// import references
const paths = require(global.gulp_config_path)
const gulp = require('gulp')
const minifyCss = require('gulp-minify-css');
const sourcemaps = require('gulp-sourcemaps');

/**
 * Compress CSS
 */
gulp.task('compress-css', function () {
  return gulp.src([paths.tmp_path + '/css/**/*'])
  	.pipe(sourcemaps.init())
    .pipe(minifyCss({compatibility: 'ie8'}))
	.pipe(sourcemaps.write('../maps', {addComment: true}))
    .pipe(gulp.dest(paths.tmp_path + '/css'))
})
