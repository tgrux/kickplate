'use strict'

// import references
const paths = require(global.gulp_config_path)
const gulp = require('gulp')

/**
 * Copy To Dist
 * copies files from the tmp directory to the dist directory
 */


gulp.task('copy-to-dist', function () {	
  return gulp.src(paths.tmp_path + '/**/*')
    .pipe(gulp.dest(paths.dist_path))
})
