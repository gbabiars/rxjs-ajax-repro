var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/app.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },

  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },

  plugins: [
    new HtmlPlugin()
  ]
};
