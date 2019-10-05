const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  entry: path.join(__dirname, '..', 'src', 'index.tsx'),
  resolve: {
    modules: [
      path.join(__dirname, '..', 'src'),
      'node_modules'
    ]
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx|ts|tsx)$/,
        exclude:/node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })
  ],
};
