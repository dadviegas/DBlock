import plugins from '../plugins'

export default (options = {}) => (setup = {}) => {
  const {webpack} = setup.modules
  const pluginsList = []

  pluginsList.push(new webpack.DllReferencePlugin({
    ...options
  }))

  return plugins(
    ...pluginsList
  )(setup)
}
