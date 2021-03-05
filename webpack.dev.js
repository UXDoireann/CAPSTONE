const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    mode:'development',
    devtool:'source-map',
    entry: './src/client/index.js',
    module: {
        rules: [
                {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                      {
                        loader: 'file-loader',
                      },
                    ],
                  },  
        ]
},
plugins:[
  new HtmlWebPackPlugin({
    template:"./src/client/views/index.html",
    filename:"./index.html",
  })
]
}