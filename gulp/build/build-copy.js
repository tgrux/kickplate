'use strict'

// import references
const paths = require(global.gulp_config_path)
const gulp = require('gulp')

/**
 * Copy Build Task
 * copies over project files to the build directory
 */
gulp.task('build-copy', ['copy-assets', 'copy-src-js', 'copy-vendor-js', 'copy-favicon'])

/**
 * sub tasks
 */
gulp.task('copy-assets', function () {
  // console.log('copying: ', paths.assets_path + '/**/*', 'to', paths.tmp_path + '/assets')
  return gulp.src([paths.assets_path + '/**/*', ('!' + paths.assets_path + '/**/*.scss'), ('!' + paths.assets_path + '/**/*.ts')])
    .pipe(gulp.dest(paths.tmp_path + '/assets'))
})

gulp.task('copy-src-js', function () {
  // console.log('copying: ', paths.js_path + '/**/*.js', 'to', paths.tmp_path + '/js')
  return gulp.src(paths.js_path + '/**/*.js')
    .pipe(gulp.dest(paths.tmp_path + '/js'))
})

gulp.task('copy-vendor-js', function () {
  // console.log('copying: ', paths.vendor_path + '/**/*.js', 'to', paths.tmp_path + '/vendor')
  return gulp.src(paths.vendor_path + '/**/*.js')
    .pipe(gulp.dest(paths.tmp_path + '/vendor'))
})

gulp.task('copy-favicon', function () {
  // console.log('copying: ', paths.src_path + '/**/*.ico', 'to', paths.tmp_path)
  return gulp.src(paths.src_path + '/**/*.ico')
    .pipe(gulp.dest(paths.tmp_path))
})
