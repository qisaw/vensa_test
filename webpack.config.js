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
      {
        test: /\.json$/,
        loaders: [
          'json'
        ],
      },
      {
        test: /\.svg$/,
        loader: 'babel!svg-react' + 
          //remove the xmlns warning https://github.com/jhamlet/svg-react-loader/issues/25
          //will remove when the issue above is closed
          '!string-replace?search=%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22&replace=',
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
    extensions: ['', '.js', '.jsx'],
    alias: {
      'react-dom': __dirname + '/node_modules/react-dom'
    }
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/message*': {
        target: 'http://vensawebtest.azurewebsites.net',
        host: 'vensawebtest.azurewebsites.net'
      }
    } 
  },
  //for testing purposes
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
}

