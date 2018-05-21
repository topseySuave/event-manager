const merge = require('webpack-merge'); // eslint-disable-line
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');
const dotenv = require('dotenv');

dotenv.load();

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        SECRET_KEY: JSON.stringify(process.env.SECRET_KEY)
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
});
