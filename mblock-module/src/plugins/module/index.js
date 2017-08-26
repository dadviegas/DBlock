const moduleRule = (rule = {}) => ({
  module: {
    rules: [
      rule
    ]
  }
})

export default (options) => (setup) => {
  const moduleRules = moduleRule(options)

  setup.options = setup.modules.merge(setup.options, moduleRules)
  return setup
}
