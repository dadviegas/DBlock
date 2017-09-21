const moduleRule = (...rules) => ({
  module: {
    rules
  }
})

export default (options = {}) => (setup = {}) => {
  const module = moduleRule(options)

  setup.options = setup.modules.merge(setup.options, module)
  return setup
}
