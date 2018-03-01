const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, 'client/src/index.jsx')
    ],
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'client', 'public', 'js'),
        filename: 'app.bundle.js',
        hotUpdateChunkFilename: './hot/hot-update.js',
        hotUpdateMainFilename: './hot/hot-update.json'
    },
    devServer: {
        publicPath: '/',
        contentbase: path.join(__dirname, 'client', 'public'),
        watchContentBase: true,
        hot: true,
        inline: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
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
            sourceMap: true,
            minimize: false
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0
        })
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx|es6)$/,
                loader: "babel-loader",
                exclude: "/node_modules",
                query: {
                    presets: ["es2015", "react", "stage-2"]
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
                exclude: "/node_modules"
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]', {
                        loader: 'image-webpack-loader',
                        query: {
                            mozjpeg: {
                                progressive: true,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 7,
                            },
                            pngquant: {
                                quality: '75-90',
                                speed: 3,
                            },
                        },
                    }],
            exclude: /node_modules/
            },
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff2"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml"},
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};
