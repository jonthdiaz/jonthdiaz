var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');
module.exports = {
output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.map'
  },
devtool: 'source-map',
resolve: {
  extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
},
watch: true,
// Add minification
 plugins: [
  //  new webpack.optimize.UglifyJsPlugin()
  new LiveReloadPlugin({
    appendScriptTag: true
  }),
  // new webpack.ProvidePlugin({
  //         $: "jquery",
  //         jQuery: "jquery",
  //         "window.jQuery": "jquery",
  //         Hammer: "hammerjs/hammer"
  //     })
 ],
 module: {
     loaders: [
      // note that babel-loader is configured to run after ts-loader
      { test: /\.ts(x?)$/, loader: 'babel-loader!ts-loader' }
    ],
  },
  ts:{
    configFileName: 'tsconfig.client.json'  
  }

}
