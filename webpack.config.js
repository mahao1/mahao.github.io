// webpack.config.js
var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    bundle:['./src/index.js'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: "/build/",
    filename: '[name].js'
  },
  // 新添加的module属性
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader!babel-loader' },
      { test: /\.js$/, exclude:/node_modules/, loader: 'babel-loader'},
      {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
      {test: /\.css$/, loader: "style-loader!css-loader"}, // 把多个css压缩到一个css中。
    ]
  },
  babel: {
    presets: ["es2015", "react", "stage-2"]
  },
  devServer: { inline: true },
  plugins: [
    new webpack.DefinePlugin({ // <-- 减少 React 大小的关键
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(), //删除类似的重复代码
    new webpack.optimize.UglifyJsPlugin(), //最小化一切
    new webpack.optimize.AggressiveMergingPlugin(),//合并块
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new ExtractTextPlugin("[name].css"),
    new webpack.HotModuleReplacementPlugin()
  ]
};