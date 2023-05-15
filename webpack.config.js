const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name]-[contenthash].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'static' }
      ]
    }),
    // new BundleAnalyzerPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  },
  module: {
    // exclude node_modules
    rules: [
        
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
        },
        { 
            test: /\.(ts|tsx)$/, 
            loader: "ts-loader" 
        },
        
        { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },

        {
            test: /\.(png|jpg|gif)$/i,
            type: 'asset'
        },
        {
            test: /\.(eot|otf|ttf|woff|woff2)$/,
            type: 'asset'
        }
        
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: [".*", ".js", ".jsx", ".ts", ".tsx", ".gif", ".png", ".scss"],
  },
  // devtool: 'nosources-source-map',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};