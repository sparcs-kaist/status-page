/* eslint-disable import/no-extraneous-dependencies */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AutoprefixerPlugin = require('autoprefixer')

module.exports = {
  entry: path.join(__dirname, '..', 'src', 'index.tsx'),
  resolve: {
    modules: [
      path.join(__dirname, '..', 'src'),
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        }],
      },
      {
        test: /\.scss$/,
        exclude: '/node_modules/',
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [AutoprefixerPlugin()],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
  ],
}
