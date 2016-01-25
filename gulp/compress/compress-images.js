'use strict'

// import references
const paths = require(global.gulp_config_path)
const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant')


/**
 * Compress Images
 * Lossless image compression.  This can take a wile, but is worth it!
 */
gulp.task('compress-images', function () {
  return gulp.src([paths.tmp_path + '/assets/**/*'])
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(paths.tmp_path + '/assets'))
})
