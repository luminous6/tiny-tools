const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'tiny-tools.js',
    clean: true,
    library: {
      name: 'tiny-tools.js',
      type: 'umd',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'dev'
    })
  ]
};
