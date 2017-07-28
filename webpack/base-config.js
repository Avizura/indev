const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dev = process.env.NODE_ENV === 'development';

const config = {
  devtool: dev ? 'source-map' : 'hidden-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: '[local]___[hash:base64:5]',
                importLoaders: 1,
              }
            }, {
              loader: "postcss-loader"
            }, {
              loader: "less-loader",
            }
          ]
        })
      },
      {
        test: /\.(svg|png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: path.join('assets', 'images/')
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': dev ? '"development"' : '"production"'
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, '..', 'src/index.html')
    }),
    new ExtractTextPlugin({
      filename: path.join('[name].[hash].css'),
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    })
  ]
};

module.exports = config;
