// app directory - assumes the gulpfile.js is in the app root
var gulp_root = global.gulp_root

// configuration - feel free to update these:
var src_dir = 'src'; 			// source code
var dist_dir = 'dist'; 			// distribution directory to build to
var vendor_dir = 'vendor'; 		// 3rd party libraries (could also be bower...)
var assets_dir = '_assets'; 	// images, fonts, etc.
var js_dir = '_js'; 			// application specific javascript (not 3rd party)
// file to inject files into - this is after the complie phase, so jade would still be .html
// locations should in the tmp directory
var inject_locations = [
	gulp_root + '/tmp/index.html'
];	

// javascript vendor injection order
var jsOrder = [
	gulp_root + '/tmp/vendor/jquery.js', 
	gulp_root + '/tmp/vendor/**/*', /* don't change this */
	'!' + gulp_root + '/tmp/vendor/modernizr.js' /* don't change this */
];

// paths to make availble for scss import statements
var scssPaths = [
	gulp_root + '/' + src_dir + '/_scss/helpers',
    gulp_root + '/' + src_dir + '/_scss/partials',
	gulp_root + '/vendor'
];

// object available to gulp tasks
module.exports = {
  // directory names - just incase they are needed
  tmp_dir: 		'tmp',
  dist_dir: 	dist_dir,
  src_dir: 		src_dir,
  vendor_dir: 	vendor_dir,
  assets_dir: 	assets_dir,
  js_dir: 		js_dir,
  inject_loc: 	inject_locations,
  scss_paths: 	scssPaths,
  js_order: 	jsOrder,
  // diretory abs paths - used the most
  gulp_root:    gulp_root,
  tmp_path:     gulp_root + '/tmp',
  dist_path:    gulp_root + '/' + dist_dir,
  src_path:     gulp_root + '/' + src_dir,
  vendor_path:  gulp_root + '/' + vendor_dir,
  assets_path:  gulp_root + '/' + src_dir + '/' + assets_dir,
  js_path:      gulp_root + '/' + src_dir + '/' + js_dir
}
