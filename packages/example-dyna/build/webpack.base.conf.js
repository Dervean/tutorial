const path = require('path')

const { srcPath, rootPath } = require('./utils.js')

module.exports = {
  entry: {
    index: path.resolve(srcPath, 'main.ts'),
  },
  resolve: {
    extensions: ['.js', '.json', '.ts'],
    alias: {
      '@example-dyna': rootPath,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [srcPath],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        include: [srcPath],
      },
    ],
  },
  plugins: [],
}
