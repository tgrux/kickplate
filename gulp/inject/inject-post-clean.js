'use strict'

// import references
const path = require(global.gulp_config_path)
const gulp = require('gulp')
const del = require('del')


/**
 * Build Task - Clean
 * cleans out the build directory
 */
gulp.task('inject-post-clean', function (cb) {
	return cb()
  	// del([path.tmp_path], { force: true }).then(paths => { cb() })
})
