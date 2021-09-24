const path = require('path');
const CriticalCssPlugin = require('critical-css-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");
const DIST_Path = path.join(__dirname, 'client/dist');
const SRC_Path = path.join(__dirname, 'client/src');


module.exports = {
  entry: `${SRC_Path}/index.jsx`,
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new CriticalCssPlugin({
      base: path.join(path.resolve(__dirname), 'client/dist/'),
      src: 'index.html',
      target: 'index.html',
      inline: true,
      extract: true,
      width: 375,
      height: 565,
    })
  ],
  output: {
    filename: 'bundle.js',
    path: DIST_Path
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            "sourceType": "unambiguous",
            plugins: [
              ['@babel/plugin-transform-runtime',
                {
                  'regenerator': true
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
};