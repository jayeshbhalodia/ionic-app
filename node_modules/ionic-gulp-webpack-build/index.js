var webpack = require('webpack'),
    Q = require('q'),
    assign = require('lodash.assign');

var defaultOptions = {
  watch: false,
  watchOptions: null,
  config: null,
  statsOptions: {
    'colors': true,
    'modules': false,
    'chunks': false,
    'exclude': ['node_modules']
  }
}

module.exports = function(options) {
  var deferred = Q.defer();
  options = assign(defaultOptions, options);
  options.config = options.config || require(process.cwd() + '/webpack.config.js');

  function webpackCallback(err, stats) {
    // print build stats and errors
    console.log(stats.toString(options.statsOptions));
    deferred.resolve();
  }

  var compiler = webpack(options.config);
  if (options.watch) {
    compiler.watch(options.watchOptions, webpackCallback);
  } else {
    compiler.run(webpackCallback);
  }

  return deferred.promise;
}

