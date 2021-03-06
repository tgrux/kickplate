'use strict'
/**
 * GULP startup PROCESS
 * @author tgiegel@celerity.com
 * @description created to be a flexabile startup process for the UI
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
 * STARTUP PHASE
 */
requireDir('./gulp/startup', {recurse: true})
gulp.task('startup', function (cb) {
  	runSequence('startup-clean', 'startup-bower', 'startup-copy', cb)
})


/**
 * COMPILE PHASE
 */
requireDir('./gulp/compile', {recurse: true})
gulp.task('compile', function (cb) {
	runSequence(['compile-sass', 'compile-jade'], cb);
})


/**
 * COMPRESS PHASE
 */
requireDir('./gulp/compress', {recurse: true})
gulp.task('compress', function (cb) {
	runSequence(['compress-images', 'compress-css', 'compress-js', 'compress-vendor'], cb);
})


/**
 * INJECT PHASE
 * concats site and vendor js files
 * moves from temp to dist
 * deletes temp directory
 * injects all dependencies into the index file
 */
requireDir('./gulp/inject', {recurse: true})
gulp.task('inject', function (cb) {
  	runSequence(['concat-js', 'concat-vendor'], 'inject-index', 'copy-to-dist', 'inject-post-clean', cb)
})


/**
 * SERVE PHASE
 */
requireDir('./gulp/serve', {recurse: true})
gulp.task('serve', function (cb) {
  	runSequence('serve-sync', 'serve-watch', cb)
})


/**
 * RUN TASKS
 * tasks to run in your CLI
 */
gulp.task('default', function (callback) {
  runSequence('startup', 'compile', 'inject', callback)
})

gulp.task('dev', function (callback) {
  runSequence('default', 'serve', callback)
})

gulp.task('prod', function (callback) {
  console.log('**** startuping for production... this may take a wile ****')
  runSequence('startup', 'compile', 'compress', 'inject', callback)
})

gulp.task('prodserve', function (callback) {
  runSequence('prod', 'serve', callback)
})
