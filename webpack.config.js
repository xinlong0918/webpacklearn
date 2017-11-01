/**
 * Created by fan.xinlong on 2017/10/16.
 */
var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

module.exports = {
    entry: {
        'index': ['./src/app.js', './src/app2.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // __dirname + '/dist'
        filename: 'js/[name]-[hash].js'
        // publicPath: 'https://m.jyallpay.com'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            camelCase: true
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            camelCase: true
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            title: '123',
            inject: 'head',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
                minijs: true
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
}