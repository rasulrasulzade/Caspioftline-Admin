var path = require("path");
var { CleanWebpackPlugin } = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require('fs')
const CopyPlugin = require('copy-webpack-plugin');


function generateHtmlPlugins (templateDir) {
  // Read files in template directory
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
  return templateFiles.map(item => {
    // Split names and extension
    const parts = item.split('.')
    const name = parts[0]
    const extension = parts[1]
    // Create new HTMLWebpackPlugin with options
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
    })
  })
}

// Call our function on our views directory.
const htmlPlugins = generateHtmlPlugins('./src/template')

module.exports = {
  entry: {
    index: "./src/js/main.js"
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "all.min.js"
  },
  module: {
    rules: [
      {
        test: [/.js$/], 
        exclude: /(node_modules)/, 
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: [/.css$|.scss$|.sass$/],
        use: [MiniCssExtractPlugin.loader, 'css-loader?url=false', "sass-loader"]
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "html-loader",
      //       options: {
      //         minimize: true //this minifies html
      //       }
      //     }
      //   ],
      //   exclude: path.resolve(__dirname, "src/index.html")
      // },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        query: {
          pretty: true //this stops to minify html
        }
      },  
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.min.css"
    }),
    new CopyPlugin([
      { from: 'src/img', to: 'img' }
    ]),
  ].concat(htmlPlugins)
};
