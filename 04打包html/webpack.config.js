const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'build.js'
  },
  module: {
    rules: []
  },
  resolve: {},
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'development'
};