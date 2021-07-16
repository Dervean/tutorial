const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')

const resolve = file => path.resolve(__dirname, file)

const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  target: 'web',
  entry: ['dev'],
  output: {
    filename: '[name].js',
    path: resolve('../dev'),
    // todo library
  },
  resolve: {
    alias: {
      vuetify$: resolve('../src/entry-bundler.ts')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        // todo
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'img/[name].[hash:7].[ext]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: resolve('../dev'),
  }
})
