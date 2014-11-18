module.exports = {
  entry: './webapp/client/index.js',
  output: {
    filename: 'build/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' }
    ]
  }
};
