const path = require('path');
require('dotenv').load();
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'client/src/index.jsx')
  ],
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'client', 'public', 'js'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|es6)$/,
        loader: 'babel-loader',
        exclude: '/node_modules',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.(scss|css)$/,
        loaders: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 700000, // Convert images < 8kb to base64 strings
            name: 'images/[name].[ext]'
          }
        }]
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff2'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
      chunkFilename: './css/[id].css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        CLOUDINARY_UPLOAD_PRESET: JSON
          .stringify(process.env.CLOUDINARY_UPLOAD_PRESET),
        CLOUDINARY_URL: JSON.stringify(process.env.CLOUDINARY_URL),
        SECRET_KEY: JSON.stringify(process.env.SECRET_KEY)
      }
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
