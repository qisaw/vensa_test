const HtmlWebpackPlugin = require('html-webpack-plugin');
const postCSSImport = require('postcss-import');
const postCSSNext = require('postcss-cssnext');
const postCSSReporter = require('postcss-reporter');
const cssnano = require('cssnano');

module.exports = {
  context: __dirname + '/src',
  entry: [
    'babel-polyfill',
    './index.js'
  ],
  debug: true,
  devtool: 'source-map',

  output: {
    path: __dirname + '/dest',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.css$/,
        loaders: [
          'style',
          'css?sourceMap&-minimize&camelCase&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss'
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel']
      },
    ],
  },
  postcss: (webpack) => {
    return [
      postCSSImport({
        addDependencyTo: webpack,
        path: ['./src/styles'],
      }),
      postCSSNext(),
      cssnano({
        autoprefixer: false,
        discardComments: {
          removeAll: true
        },
        discardUnused: false,
        mergeIdents: false,
        reduceIdents: false,
        safe: true,
        sourcemap: true
      }),
      postCSSReporter(),
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
}

