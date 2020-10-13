const path = require('path')
const public_dir = path.join(__dirname, 'public')

module.exports = {
  entry: './src/app.js',
  output: {
    path: public_dir,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['transform-class-properties']
          }
        }
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: public_dir
  }
}
