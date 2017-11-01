/**
 * Created by fan.xinlong on 2017/11/1.
 */
var rm = require('rimraf')
var path = require('path')
var webpack = require('webpack')
var webpackConfig = require('./webpack.config.js')

rm(path.join(__dirname + '/dist'), err => {
    if (err) throw err
    webpack(webpackConfig, function (err, stats) {
        if (err) throw err
    })
})
