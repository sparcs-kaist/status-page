const merge = require('webpack-merge')
const base = require('./webpack.base.config')

const port = process.env.PORT || 3000;

module.exports = (env) =>  merge(
  base,
  {
    devServer: {
      host: 'localhost',
      port: port,
      open: true,
      historyApiFallback: true
    }
  },
)
