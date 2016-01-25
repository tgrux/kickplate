// app directory - assumes the gulpfile.js is in the app root
var gulp_root = global.gulp_root

// configuration - feel free to update these:
var src_dir = 'src' // source code
var dist_dir = 'dist' // distribution directory to build to
var vendor_dir = 'vendor' // 3rd party libraries (could also be bower...)
var assets_dir = '_assets' // images, fonts, etc.
var js_dir = '_js' // application specific javascript (not 3rd party)
var indexName = 'index.html'

// object available to gulp tasks
module.exports = {
  // directory names - just incase they are needed
  tmp_dir: 'tmp',
  dist_dir: dist_dir,
  src_dir: src_dir,
  vendor_dir: vendor_dir,
  assets_dir: assets_dir,
  js_dir: js_dir,
  index_name: indexName,
  // diretory abs paths - used the most
  gulp_root:    gulp_root,
  tmp_path:     gulp_root + '/tmp',
  dist_path:    gulp_root + '/' + dist_dir,
  src_path:     gulp_root + '/' + src_dir,
  vendor_path:  gulp_root + '/' + vendor_dir,
  assets_path:  gulp_root + '/' + src_dir + '/' + assets_dir,
  js_path:      gulp_root + '/' + src_dir + '/' + js_dir
}
