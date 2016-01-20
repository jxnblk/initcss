
module.exports = function (config) {
  config.set({
    browsers: [
      'Firefox'
    ],

    files: [
      'test/index.js',
      'lib/init.css'
    ],

    frameworks: [
      'mocha'
    ],

    plugins: [
      'karma-firefox-launcher',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-webpack'
    ],

    reporters: [ 'mocha' ],

    preprocessors: {
      'test/index.js': [ 'webpack' ]
    },

    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              presets: [ 'es2015' ]
            }
          }
        ]
      }
    }

  })
}
