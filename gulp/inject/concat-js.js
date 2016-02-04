'use strict'

// import references
const paths = require(global.gulp_config_path);
const gulp = require('gulp');
const concat = require('gulp-concat');
const runSequence = require('run-sequence');
const del = require('del');

/**
 * Compress JavaScript
 */
gulp.task('concat-js', function (cb) {
	runSequence('sub-concat-js', 'remove-non-concat-js', cb);
})

gulp.task('sub-concat-js', function (cb) {
  	return gulp.src([paths.tmp_path + '/js/**/*'])
		.pipe(concat('site.js'))
    	.pipe(gulp.dest(paths.tmp_path + '/js'))
})

gulp.task('remove-non-concat-js', function (cb) {
 	del([paths.tmp_path + '/js/**', '!' + paths.tmp_path + '/js', '!' + paths.tmp_path + '/js/site.js'], { force: true }).then(paths => { cb() }) 	
})
