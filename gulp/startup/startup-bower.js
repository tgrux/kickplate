'use strict'

// import references
const path = require(global.gulp_config_path);
const gulp = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const mainBowerFiles = require('main-bower-files');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

/**
 * startup Task - Bower
 * moves bower files into the correct tmp directories
 */
gulp.task('startup-bower', ['move-bower-js'], function (cb) {
	return cb();
});

gulp.task('move-bower-js', function (cb) {
	var bowerJSFiles = mainBowerFiles('/**/*.js');
	return gulp.src(bowerJSFiles)
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(concat('bower.js'))
		.pipe(sourcemaps.write('../maps', {addComment: true}))
    	.pipe(gulp.dest(path.tmp_path + '/vendor'))
})