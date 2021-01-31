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
    rules: [
      {
        //详细的loader配置
        test: /\.css$/,
        //use数组中loader执行顺序：从右往左，从下到上
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        //详细的loader配置
        test: /\.less$/,
        //use数组中loader执行顺序：从右往左，从下到上
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/, //处理图片资源
        loader: 'url-loader', //使用一个loader直接写loader
        options: {
          limit: 8 * 1024,//图片小于8kb，就会被base64处理
        }
      },
      {
        test: /\.html$/, //处理图片资源
        loader: 'html-loader', //使用一个loader直接写loader
      },
    ]
  },
  resolve: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development'
};