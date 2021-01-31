const { resolve } = require('path');
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
      }
    ]
  },
  resolve: {},
  plugins: [],
  mode: 'development'
};