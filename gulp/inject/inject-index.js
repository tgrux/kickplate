'use strict'

// import references
const paths = require(global.gulp_config_path)
const gulp = require('gulp')
const inject = require('gulp-inject') // injects js & css files into index
const series = require('stream-series') // used for gulp inject ordering

/**
 * Build Task - Inject
 * injects support files into the index file
 * this should be done AFTER source files have been delt with & moved to the build directory
 */
gulp.task('inject-index', ['copy-to-dist'], function () {

  // #1 prority stream - loaded before anything else on the page
  var priorityStream = gulp.src(paths.tmp_path + '/vendor/modernizr.js', {read: false})

  // #2 vendor streams
  var vendorStream = gulp.src([(paths.tmp_path + '/vendor/**/*.js'), ('!' + paths.tmp_path + '/vendor/modernizr.js')], {read: false})

  // #3 src streams
  var srcStream = gulp.src([(paths.tmp_path + '/js/**/*.js'), (paths.tmp_path + '/css/**/*.css')], {read: false})

  return gulp.src(paths.inject_loc)
    .pipe(inject(priorityStream, {starttag: '<!-- inject:head:{{ext}} -->', ignorePath: paths.tmp_dir}))
    // this will always inject vendor files before app files
    .pipe(inject(series(vendorStream, srcStream), {ignorePath: paths.tmp_dir})) 
    .pipe(gulp.dest(paths.tmp_path))
})
