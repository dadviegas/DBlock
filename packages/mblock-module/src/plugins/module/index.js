const moduleOptions = (options) => ({
  module: {
    ...options
  }
})

export default (options) => (setup = {}) => {
  const module = moduleOptions(options)

  setup.options = setup.modules.merge(setup.options, module)
  return setup
}
