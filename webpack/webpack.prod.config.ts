/* eslint-disable import/no-extraneous-dependencies */
import base from './webpack.base.config'

const path = require('path')
const merge = require('webpack-merge')

module.exports = () =>
  merge(base, {
    mode: 'production',
    output: {
      path: path.join(__dirname, '..', 'dist'),
      filename: 'bundle.[hash].js',
    },
  })
