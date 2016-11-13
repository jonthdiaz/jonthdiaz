var webpack = require('webpack');
module.exports = {
output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.map'
  },
devtool: 'source-map',
resolve: {
  extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
},
// Add minification
 plugins: [
   new webpack.optimize.UglifyJsPlugin()
 ],
 module: {
     loaders: [
      // note that babel-loader is configured to run after ts-loader
      { test: /\.ts(x?)$/, loader: 'babel-loader!ts-loader' }
    ],
   }
}
