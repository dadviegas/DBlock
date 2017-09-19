import rule from '../module/rules'

const defaultBabel = (options = {}) => rule({
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader'
  },
  ...options
})

export default (options = {}) => (setup = {}) => {
  const gen = defaultBabel(options)
  const babelOptions = gen(setup)

  setup.options = setup.modules.merge(setup.options, babelOptions)
  return setup
}
