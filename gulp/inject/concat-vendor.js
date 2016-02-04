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
gulp.task('concat-vendor', function (cb) {
	runSequence('sub-concat-vendor', 'remove-non-concat-vendor', cb);
})

gulp.task('sub-concat-vendor', function (cb) {
  	return gulp.src([paths.tmp_path + '/vendor/**/*', '!' + paths.tmp_path + '/vendor/modernizr.js'])
		.pipe(concat('vendor.js'))
    	.pipe(gulp.dest(paths.tmp_path + '/vendor'))
})

gulp.task('remove-non-concat-vendor', function (cb) {
 	del([paths.tmp_path + '/vendor/**', '!' + paths.tmp_path + '/vendor', '!' + paths.tmp_path + '/vendor/vendor.js', '!' + paths.tmp_path + '/vendor/modernizr.js'], { force: true }).then(paths => { cb() })
})
