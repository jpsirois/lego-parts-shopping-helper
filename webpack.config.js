module.exports = {
  cache: true,

  context: __dirname + '/src',

  output: {
    path: __dirname + '/app',
    filename: '[name].bundle.js'
  },

  entry: {
    background: './background.js',
    content: './content.js'
  },

  stats: {
    colors: true,
    reasons: true
  },

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jshint-loader'
    }]
  }
}
