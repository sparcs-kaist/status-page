const path = require('path');
const merge = require('webpack-merge')
const base = require('./webpack.base.config')

module.exports = (env) => merge(
  base,
  {
    output: {
      path: path.join(__dirname, '..', 'dist'),
      filename: 'bundle.[hash].js'
    },
  },
)
