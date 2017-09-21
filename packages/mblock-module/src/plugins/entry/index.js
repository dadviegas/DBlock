const defaultValue = {
  path: 'lib',
  filename: '[name].js'
}

export default (options = defaultValue) => (setup = {}) => {
  const _options = {
    entry: {
      ...options
    }
  }

  setup.options = setup.modules.merge(setup.options, _options)
  return setup
}
