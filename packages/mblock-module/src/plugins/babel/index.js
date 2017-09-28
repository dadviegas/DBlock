import rule from '../module/rules'

const defaultBabel = (options = {}) => rule({
  test: /\.js$/,
  exclude: /node_modules\/(?!(([^\/]+?\/){1,2}(src|es6|es)))/,
  use: {
    loader: 'babel-loader'
  },
  ...options
})

export default (options = {}) => (setup = {}) => {
  defaultBabel(options)(setup)
  return setup
}
