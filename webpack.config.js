var webpack = require('webpack');

var port = process.env.PORT || 8080;
var host = process.env.IP || '127.0.0.1';

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
  },
  devServer: {
    host: host,
    port: port
  }
};

module.exports = config;