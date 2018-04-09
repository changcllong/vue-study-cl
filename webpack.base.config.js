const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const vueLoaderConfig = require('./vue-loader.config');

// 源代码更目录
const SRC_PATH = path.resolve('./src');
// 打包后的资源根目录（本地物理文件路径）
const ASSETS_BUILD_PATH = path.resolve('./build');
// 资源根目录（可以是 CDN 上的绝对路径，或相对路径）
const ASSETS_PUBLIC_PATH = 'http://localhost:9092/assets/';

module.exports = {
    context: SRC_PATH,

    resolve: {
        extensions: ['.js', '.vue'] // 同时支持 js 和 vue
    },

    entry: {
        index: ['./index.js'],
        vendor: [
            'babel-polyfill',
            'vue',
            'vue-router'
        ]
    },

    output: {
        path: ASSETS_BUILD_PATH,
        publicPath: ASSETS_PUBLIC_PATH,
        filename: '[name].js',
        chunkFilename: '[name].js',
    },

    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(vue)$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: vueLoaderConfig
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'application/font-woff',
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'application/font-woff',
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin([ASSETS_BUILD_PATH], { verbose: false }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            minChunks: Infinity
        })
    ]
};
