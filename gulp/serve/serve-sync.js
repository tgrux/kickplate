'use strict'

// imports
const paths = require(global.gulp_config_path)
const gulp = require('gulp')
const browserSync = require('browser-sync').create()

/**
 * Build Task - Copy
 * copies over project files to the build directory
 */
gulp.task('serve-sync', function () {
  console.log('serving from: ', paths.dist_path)
  return browserSync.init({
    server: paths.dist_path,
    logFileChanges: false
  })
})


