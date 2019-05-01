const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },

  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(),
  ],
}
