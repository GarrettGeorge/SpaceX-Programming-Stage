const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  devServer: {
    contentBase: './dist',
    hot: true
  },
  entry: "./client/app.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'SpaceX Programming Test',
      favicon: 'client/assets/images/favicon.ico'
    }),
    new ExtractTextPlugin({ filename: 'app.bundle.css' })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
      },
      {
        test:/\.(s*)css$/, 
                use: ExtractTextPlugin.extract({ 
                        fallback:'style-loader',
                        use:['css-loader','sass-loader'],
                    })
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
    }
    ]
  }
};