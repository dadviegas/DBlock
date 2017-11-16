// will receive the options for the partial webpack configuration
// and will merge the options with the webpack configuration
export default (options = {}, func) => (setup = {}) => {
  const _options = func ? func(options, setup) : options
  setup.options = setup.modules.merge(setup.options, _options)
  return setup
}
