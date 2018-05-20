const merge = require('webpack-merge'); // eslint-disable-line
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        SECRET_KEY: JSON.stringify(process.env.SECRET_KEY)
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true, // big one--strip code that will never execute
        warnings: false, // good for prod apps so users can't peek behind curtain
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        drop_console: true, // strips console statements
        sequences: true,
        booleans: true,
      },
      comments: false,
      sourceMap: false,
      minimize: true
    }),
  ],
});
