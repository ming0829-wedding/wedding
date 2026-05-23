const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist/client"),
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }]],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public/image", to: "image" },
        { from: "public/nav-icon", to: "nav-icon" },
        { from: "public/background-music.mp3", to: "background-music.mp3" },
        { from: "public/favicon.ico", to: "public/favicon.ico" },
        { from: "public/logo192.png", to: "public/logo192.png" },
        { from: "public/logo512.png", to: "public/logo512.png" },
        { from: "public/manifest.json", to: "public/manifest.json" },
      ],
    }),
  ],
};
