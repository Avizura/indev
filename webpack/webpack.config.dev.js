const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  plugins: [
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    //   defaultSizes: 'parsed',
    //   generateStatsFile: true
    // })
  ]
};

module.exports = config;
