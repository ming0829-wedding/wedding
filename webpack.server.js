// webpack.server.js
const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
  target: 'node',
  mode: 'development',
  entry: path.resolve(__dirname, 'server/index.js'),
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/server'),
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
          },
        },
      },
    ],
  },
};
