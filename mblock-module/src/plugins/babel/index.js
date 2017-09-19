import module from '../module'

const defaultBabel = (options = {}) => module({
  rules: [{
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [['env', {
          'modules': false,
          'loose': true
        }], 'stage-0']
      }
    },
    ...options
  }]
})

export default (options = {}) => (setup = {}) => {
  const gen = defaultBabel(options)
  const babelOptions = gen(setup)

  setup.options = setup.modules.merge(setup.options, babelOptions)
  return setup
}
