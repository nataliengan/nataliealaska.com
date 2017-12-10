const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
      './src/index.js',
      './style/style.css'
  ],
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: 'build/'
  },
  module: {
    loaders: [{
          exclude: /node_modules/,
          loader: 'babel-loader',
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
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}
