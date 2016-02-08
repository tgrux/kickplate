'use strict'

// import references
const path = require(global.gulp_config_path)
const gulp = require('gulp')
const del = require('del')


/**
 * startup Task - Clean
 * cleans out the startup directory
 */
gulp.task('startup-clean', function (cb) {
  // console.log('cleaning:', paths.dist_path)
  del([path.dist_path, path.tmp_path], { force: true }).then(paths => { cb() })
})
