const plugins = (options) => ({
  plugins: [
    ...options
  ]
})

export default (...options) => (setup = {}) => {
  setup.options = setup.modules.merge(setup.options, plugins(options))
  return setup
}
