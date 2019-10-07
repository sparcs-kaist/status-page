/* eslint-disable import/no-extraneous-dependencies */

const merge = require('webpack-merge')
const base = require('./webpack.base.config')

const port = process.env.PORT || 3000

module.exports = () => merge(
  base,
  {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      host: 'localhost',
      port,
      open: true,
      historyApiFallback: true,
    },
  },
)
