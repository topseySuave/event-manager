const merge = require('webpack-merge'); // eslint-disable-line
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');
require('dotenv').config();

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        CLOUDINARY_UPLOAD_PRESET: JSON
          .stringify(process.env.CLOUDINARY_UPLOAD_PRESET),
        CLOUDINARY_URL: JSON.stringify(process.env.CLOUDINARY_URL),
        SECRET_KEY: JSON.stringify(process.env.SECRET_KEY),
        DATA_LIMIT: JSON.stringify(process.env.DATA_LIMIT)
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
});
