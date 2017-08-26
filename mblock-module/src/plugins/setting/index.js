// will receive the options for the partial webpack configuration
// and will merge the options with the webpack configuration
export const setting = (options = {}) => (setup = {}) => {
  setup.options = setup.modules.merge(setup.options, options)
  return setup
}
