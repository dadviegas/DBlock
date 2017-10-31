
import plugins from '../plugins'

export default (options = {}) => (setup = {}) => {
  // const {webpack} = setup.modules
  const environment = process.env.NODE_ENV
  const pluginsList = []
  const {MinifyPlugin} = setup.plugins

  if (environment === 'production') {
    pluginsList.push(new MinifyPlugin())
  }

  return plugins(
    ...pluginsList
  )(setup)
}
