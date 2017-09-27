
import plugins from '../plugins'

export default (options = {}) => (setup = {}) => {
  const {webpack} = setup.modules

  const pluginsList = [
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: Infinity,
      filename: '[name].bundle.js',
      ...options
    })
  ]

  return plugins(
    ...pluginsList
  )(setup)
}
