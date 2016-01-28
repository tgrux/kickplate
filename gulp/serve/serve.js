'use strict'

// imports
const paths = require(global.gulp_config_path)
const gulp = require('gulp')
const browserSync = require('browser-sync').create()


/**
 * Build Task - Sync
 * used for browserSync
 */
gulp.task('serve-sync', function () {
  console.log('serving from: ', paths.dist_path)
  return browserSync.init({
    server: paths.dist_path,
    logFileChanges: false
  })
})


/**
 * Build Task - Watch
 * watches working directory for changes and re-builds and serves automatically
 */
gulp.task('serve-watch', function () {
	console.log('watching' + paths.src_path + '/**/*');
	browserSync.reload();
	gulp.watch([paths.src_path + '/**/*'], ['default', browserSync.reload]);
});
