export default (options = {}) => (setup = {}) => {
  const _options = {
    entry: {
      ...options
    }
  }

  console.log('_options', _options)

  setup.options = setup.modules.merge(setup.options, _options)
  return setup
}
