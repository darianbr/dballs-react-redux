const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const extractSass = new ExtractTextPlugin({
  filename: 'css/app.css'
})

module.exports = {
  entry: [
    './src/style',
    './src/app'
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json']
  },
  output: {
    path: path.resolve(__dirname, 'web'),
    filename: 'js/app.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src')
        ],
        options: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false,
                includePaths: [
                  path.resolve(__dirname, 'node_modules')
                ]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    extractSass
  ],
  devServer: {
    contentBase: 'web',
    historyApiFallback: true,
    disableHostCheck: true
  }
}
