import rule from '../module/rules'
import plugins from '../plugins'
import happyPack from '../happypack'

const defaultBabel = (options = {}) => rule({
  test: /\.js|jsx$/,
  exclude: /node_modules\/(?!(([^\/]+?\/){1,2}(src|es6|es)))/,
  use: {
    loader: 'happypack/loader?id=jsx'
  },
  ...options
})

export default (options = {}) => (setup = {}) => {
  defaultBabel(options)(setup)

  plugins(happyPack({
    id: 'jsx',
    loaders: [ 'babel-loader' ]
  }))(setup)

  return setup
}
