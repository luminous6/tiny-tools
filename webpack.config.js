const path = require('path');

module.exports = {
  mode: 'production',
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
};
