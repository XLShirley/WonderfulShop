/*
 * @Author: 肖玲
 * @Date: 2020-03-14 11:33:44
 * @LastEditTime: 2023-06-15 01:52:25
 * @LastEditors: 肖玲
 * @Description: 
 * @FilePath: /WonderfulShop/mpvue-shop/build/build.js
 * 文件备注
 */
require('./check-versions')()

process.env.NODE_ENV = 'production'
process.env.PLATFORM = process.argv[process.argv.length - 1] || 'wx'
// dhsdjf

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')
var utils = require('./utils')

var spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, '*'), err => {
    if (err) throw err
    webpack(webpackConfig, function (err, stats) {
        spinner.stop()
        if (err) throw err
        if (process.env.PLATFORM === 'swan') {
            utils.writeFrameworkinfo()
        }
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')

        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'))
            process.exit(1)
        }

        console.log(chalk.cyan('  Build complete.\n'))
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ))
    })
})
