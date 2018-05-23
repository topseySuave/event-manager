const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
require('dotenv').load();

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    hotUpdateChunkFilename: './hot/hot-update.js',
    hotUpdateMainFilename: './hot/hot-update.json'
  },
  devServer: {
    publicPath: '/',
    contentbase: path.join(__dirname, 'client', 'public'),
    watchContentBase: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    compress: true,
    overlay: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
  ]
});
