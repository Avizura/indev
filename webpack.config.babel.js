const path = require('path');
const baseClientConfiguration = require('./webpack/base-config');
const devConfig = require('./webpack/webpack.config.dev');
const prodConfig = require('./webpack/webpack.config.prod');

const dev = process.env.NODE_ENV === 'development';

const configuration = dev ? devConfig : prodConfig;

const clientConfiguration = {
  ...baseClientConfiguration,
  context: __dirname,
  entry: {
    workers: `${__dirname}/src/workers/bootstrap.js`,
    vendor: [
      'react', 'react-dom', 'react-redux', 'redux', 'redux-form',
      'react-router-dom', 'material-ui', 'react-intl'
    ]
  },
  output: {
    filename: path.join('scripts', '[name].[hash].js'),
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist',
    stats: {
      children: false, modules: false, reasons: false, timings: true,
      assets: false, chunks: true, cached: false, source: false, chunkOrigins: false
    },
  }
};

clientConfiguration.plugins = [
  ...clientConfiguration.plugins,
  ...configuration.plugins
].filter(Boolean);

module.exports = clientConfiguration;
