'use strict'
/**
 * GULP BUILD PROCESS
 * @author tgiegel@celerity.com
 * @description created to be a flexabile build process for the UI
 */

// set roots for includes
const gulp_root = __dirname
global.gulp_root = gulp_root
global.gulp_config_path = gulp_root + '/gulp/gulp.config.js'

// import dependencies
const gulp = require('gulp')
const runSequence = require('run-sequence') // used to make some tasks synchronous
const requireDir = require('require-dir')


/**
 * BUILD PHASE
 */
requireDir('./gulp/build', {recurse: true})
gulp.task('build', function (cb) {
  runSequence('build-clean', 'build-copy', cb)
})


/**
 * COMPILE PHASE
 */
requireDir('./gulp/compile', {recurse: true})
gulp.task('compile', ['compile-sass', 'compile-jade'], function (cb) {
  // runSequence( cb)
  return cb()
})


/**
 * COMPRESS PHASE
 */
requireDir('./gulp/compress', {recurse: true})
gulp.task('compress', function (cb) {
  console.log('**** image compression may take a wile ****')
  runSequence('compress-images', cb)
})


/**
 * INJECT PHASE
 * moves from temp to dist
 * deletes temp directory
 * injects all dependencies into the index file
 */
requireDir('./gulp/inject', {recurse: true})
gulp.task('inject', function (cb) {
  runSequence('inject-index', 'copy-to-dist', 'inject-post-clean', cb)
})

/**
 * SERVE PHASE
 */
requireDir('./gulp/serve', {recurse: true})
gulp.task('serve', function (cb) {
  runSequence('serve-sync', cb)
})


/**
 * RUN TASKS
 * tasks to run in your CLI
 */
gulp.task('default', function (callback) {
  runSequence('build', 'compile', 'inject', callback)
})

gulp.task('dev', function (callback) {
  runSequence('build', 'compile', 'inject', 'serve', callback)
})

gulp.task('prod', function (callback) {
  console.log('**** building for production... this may take a wile ****')
  runSequence('build', 'compile', 'compress', 'inject', callback)
})