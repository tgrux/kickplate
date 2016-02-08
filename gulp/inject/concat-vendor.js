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
gulp.task('concat-vendor', function (cb) {
	runSequence('sub-concat-vendor', 'remove-non-concat-vendor', cb);
})

// concat all vendor files
gulp.task('sub-concat-vendor', function (cb) {
	// jquery is first because order matters.  Remove if not using jquery
  	return gulp.src(path.js_order)
		.pipe(concat('vendor.js'))
    	.pipe(gulp.dest(path.tmp_path + '/vendor'))
})

// delete all original vendor files from the tmp directory, we only need the concated one
gulp.task('remove-non-concat-vendor', function (cb) {
 	del([
		 path.tmp_path + '/vendor/**', 
		 '!' + path.tmp_path + '/vendor', 
		 '!' + path.tmp_path + '/vendor/vendor.js', 
		 '!' + path.tmp_path + '/vendor/modernizr.js'
	], { force: true }).then(paths => { cb() })
})
