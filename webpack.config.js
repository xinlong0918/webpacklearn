/**
 * Created by fan.xinlong on 2017/10/16.
 */
var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'main': './src/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[chunkhash].js',
        publicPath: 'http://cdn.com/'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            title: 'webpack is good',
            date: new Date(),
            minify: {
                // removeComments: true,
                collapseInlineTagWhitespace: true
            }
        })
    ]
}