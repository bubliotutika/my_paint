const webpack = require("webpack");
const path = require("path");

let config = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "./my_paint.js"
    }
  }
  
  module.exports = config;