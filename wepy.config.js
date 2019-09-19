const path = require('path')
var prod = process.env.NODE_ENV === 'production'

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: !prod,
  build: {},
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      static: path.join(__dirname, 'src/static'),
      '@': path.join(__dirname, 'src')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: prod
    },

    babel: {
      sourceMap: true,
      presets: ['@babel/preset-env'],
      plugins: ['@wepy/babel-plugin-import-regenerator']
    }
  },
  static: 'src/static',
  plugins: [],
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}
