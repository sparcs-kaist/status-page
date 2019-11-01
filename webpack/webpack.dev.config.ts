/* eslint-disable import/no-extraneous-dependencies */
import base from './webpack.base.config'

const merge = require('webpack-merge')

const port = process.env.PORT || 3000

module.exports = () =>
  merge(base, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      host: 'localhost',
      port,
      open: true,
      historyApiFallback: true,
    },
  })
