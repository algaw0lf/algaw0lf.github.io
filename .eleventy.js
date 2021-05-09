let gzipStatic = require('connect-gzip-static');
module.exports = (config) => {
  config.addFilter('prettyDate', require('./src/_config/prettyDate'))
  config.addPassthroughCopy({ public: './' })
  config.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'))
  config.setBrowserSyncConfig({
    files: [
      {
        match: ['dist/assets/*.css', 'dist/assets/*.js'],
        fn: function (event, file) {
          this.reload();
        }
      }],
    open: true,
    // middleware: [gzipStatic(__dirname + '/dist')],
    snippetOptions: {
      rule: {
        fn: function (snippet, match) {
          return snippet + match
        },
        match: /<\/head>/i,
      },
    }
  })
  config.setDataDeepMerge(true)
  config.setLibrary('md', require('./src/_config/markdown'))
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    markdownTemplateEngine: false,
  }
}
