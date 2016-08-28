var webpack = require('webpack');

var config = {
  entry: './index.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: ['es2016', 'react']
        }
      }
    ]
  }
};

module.exports = config;