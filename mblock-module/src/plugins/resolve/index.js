const resolveOptions = (options = {}) => ({
  resolve: {
    extensions: ['.js', '.jsx'],
    ...options
  }
})

export default (options) => (setup = {}) => {
  setup.options = setup.modules.merge(setup.options, resolveOptions(options))
  return setup
}
