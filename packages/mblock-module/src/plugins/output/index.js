const defaultOutput = {
  filename: '[name].js'
}

export default (options = defaultOutput) => (setup = {}) => {
  const _options = {
    output: {
      ...options
    }
  }

  setup.options = setup.modules.merge(setup.options, _options)
  return setup
}
