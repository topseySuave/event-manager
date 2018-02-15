const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, 'client/src/index.js')
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
        new webpack.HotModuleReplacementPlugin()
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
