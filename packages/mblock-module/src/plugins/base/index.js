export default (options = {}) => (setup = {}) => {
  setup.options = setup.modules.merge(setup.options, options)
  return setup
}
