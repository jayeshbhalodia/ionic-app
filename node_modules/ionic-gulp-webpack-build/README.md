# Webpack Build Task
Use webpack to transpile and bundle your source files.

You will need to provide a `webpack.config.js` file in your project root. For more information on webpack configuration, see https://webpack.github.io/docs/configuration.html.

## API

### webpackBuild([options])

Returns a Promise that resolves when the build is finished.

#### Available options:
- **watch** (boolean) Whether to watch for changes or not. Default: `false`.
- **watchOptions** (Object) [Watch options](https://webpack.github.io/docs/node.js-api.html#compiler) for webpack. Default: `null`.
- **config** (Object) [Configuration](https://webpack.github.io/docs/configuration.html) for webpack. Default: uses `webpack.config.js` from your project root.
- **statsOptions** (Object) [Stats options](https://webpack.github.io/docs/node.js-api.html#stats-tostring) for webpack. Default:
```
{
  'colors': true,
  'modules': false,
  'chunks': false,
  'exclude': ['node_modules']
}
```

## Example

```
var webpackBuild = require('ionic-gulp-webpack-build');

gulp.task('build', webpackBuild);

gulp.task('watch', function(){
  return webpackBuild({
    watch: true,
    statsOptions: {
      'colors': false,
      'errorDetails': true
    }  
  })
});
```





