const merge = require('webpack-merge')
const base = require('./webpack.base.config')

const port = process.env.PORT || 3000;

module.exports = (env) =>  merge(
  base,
  {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      host: 'localhost',
      port: port,
      open: true,
      historyApiFallback: true
    }
  },
)
