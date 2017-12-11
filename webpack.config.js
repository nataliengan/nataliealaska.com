const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'file-loader',
  'lodash',
  'react',
  'react-dom',
  'react-redux',
  'react-router-dom',
  'redux',
  'url-loader'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/,
          query: {
            presets: ['react', 'es2015', 'stage-1']
          }
        },{
          use: ['style-loader', 'css-loader'],
          test: /\.css$/
        },{
          test: /\.(jpe?g|png)$/,
          use: [
            {
              loader: 'url-loader',
              options: { limit: 40000 }
            },
            'image-webpack-loader'
          ]
        }
      ]
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}
