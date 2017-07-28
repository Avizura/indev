const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// const CompressionPlugin = require('compression-webpack-plugin');

const config = {
  plugins: [
    new UglifyJSPlugin({
      compress: {
        warnings: false,
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      sourceMap: false,
      output: {
        comments: false
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new CompressionPlugin({
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: /\.js$|\.css$/,
    //   minRatio: 0.8
    // })
  ]
};

module.exports = config;
