const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, './client/src/index.js')
    ],
    output: {
        path: path.join(__dirname, './client/public'),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                // loaders: [
                //     'file-loader?hash=sha512&digest=hex&name=[hash].[ext]', {
                //         loader: 'image-webpack-loader',
                //         query: {
                //             mozjpeg: {
                //                 progressive: true,
                //             },
                //             gifsicle: {
                //                 interlaced: false,
                //             },
                //             optipng: {
                //                 optimizationLevel: 7,
                //             },
                //             pngquant: {
                //                 quality: '75-90',
                //                 speed: 3,
                //             },
                //         },
                //     }],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders: ['react-hot-loader/webpack', 'babel-loader'],
            },
            {
                test: /\.s?css$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                },
                    {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            plugins() { // post css plugins, can be exported to postcss.config.js
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },]
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=/fonts/[name].[ext]'
            },
        ]
    },
    resolve: {
        extensions: ['.js']
    }
};
