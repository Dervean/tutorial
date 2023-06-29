const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')

const { rootPath } = require('./utils.js')
const baseWebpackConfig = require('./webpack.base.conf.js')

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'css-loader', options: { sourceMap: true } }],
      },
      {
        test: /\.scss$/,
        use: [{ loader: 'css-loader', options: { sourceMap: true } }, 'sass-loader'],
      },
    ],
  },
  output: {
    publicPath: '/',
    path: path.resolve(rootPath, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({ 'process.env': JSON.stringify('development') }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(rootPath, 'public', 'index.html'),
      inject: true,
    }),
    // new webpack.HotModuleReplacementPlugin(), // webpack-dev-server already do this
  ],
  devServer: {
    static: {
      directory: path.resolve(rootPath, 'public'),
    },
    compress: true,
    historyApiFallback: true,
    hot: true,
    port: 9001,
    open: false,
  },
})
