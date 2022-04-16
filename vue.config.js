const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package.json')
module.exports = defineConfig({
  transpileDependencies: true,
  output: {
    publicPath: process.env.NODE_ENV === 'development'
    ? '/'
    : `/mfe/vue/`
  },
  devServer: {
    port: 8082,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-name`,
      libraryTarget: 'umd'
    }
  }
})
