const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../planet/dist'),
    filename: 'react-[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
