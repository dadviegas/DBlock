const resolveOptions = (options = {}) => ({
  resolve: {
    modules: ['node_modules'],
    extensions: ['.', '.js', '.jsx'],
    ...options
  }
})

export default (options) => (setup = {}) => {
  setup.options = setup.modules.merge(setup.options, resolveOptions(options))
  return setup
}
