'use strict'

// import references
const path = require(global.gulp_config_path);
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
  	return gulp.src([path.tmp_path + '/js/**/*'])
		.pipe(concat('site.js'))
    	.pipe(gulp.dest(path.tmp_path + '/js'))
})

gulp.task('remove-non-concat-js', function (cb) {
 	del([path.tmp_path + '/js/**', '!' + path.tmp_path + '/js', '!' + path.tmp_path + '/js/site.js'], { force: true }).then(paths => { cb() }) 	
})
