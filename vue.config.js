const resolve = require('./resolve.config')

module.exports = {
  configureWebpack: {
    resolve
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "src/assets/styles/index.sass";'
      }
    }
  }
}
