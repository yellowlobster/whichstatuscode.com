// This global variable is replaced by the webpack build, and set globally in
// the to_static script
var manifest = ASSETS_MANIFEST; // jshint ignore:line

if (manifest) {
  module.exports = function assetPath(asset) {
    return manifest[asset];
  };
} else {
  module.exports = function assetPath(asset) {
    return asset;
  };
}

