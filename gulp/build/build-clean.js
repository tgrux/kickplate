'use strict'

// import references
const path = require(global.gulp_config_path)
const gulp = require('gulp')
const del = require('del')


/**
 * Build Task - Clean
 * cleans out the build directory
 */
gulp.task('build-clean', function (cb) {
  // console.log('cleaning:', paths.dist_path)
  del([path.dist_path, path.tmp_path], { force: true }).then(paths => { cb() })
})
