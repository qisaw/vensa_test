var webpackConfig = require('./webpack.config.js');
console.log('running');
module.exports = function(config) {
  config.set({
    basePath: "src",
    frameworks: [
      'mocha',
      'chai',
      'phantomjs-shim'
    ],
    files: [
      '../node_modules/babel-polyfill/dist/polyfill.js',
      '**/*.spec.js'
    ],
    webpack: webpackConfig,
    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // preprocessors: preprocessors,
    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],


    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // To avoid the runner restarting too early on batch changes
    autoWatchBatchDelay: 1000,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: 10,

    plugins: [
      'karma-webpack',
      'karma-chai',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-phantomjs-shim',
      'karma-sourcemap-loader'
    ],
  })
}
