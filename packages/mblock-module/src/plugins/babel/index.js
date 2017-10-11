import rule from '../module/rules'
import plugins from '../plugins'
import happyPack from '../module/happypack'

const defaultBabel = (options = {}) => rule({
  test: /\.js$/,
  exclude: /node_modules\/(?!(([^\/]+?\/){1,2}(src|es6|es)))/,
  use: {
    loader: 'happypack/loader?id=jsx',
    options: {
      optional: 'runtime',
      cacheDirectory: './webpack_cache/'
    }
  },
  ...options
})

export default (options = {}) => (setup = {}) => {
  defaultBabel(options)(setup)

  plugins([happyPack({
    id: 'jsx',
    loaders: [ 'babel-loader' ]
  })])(setup)

  return setup
}
