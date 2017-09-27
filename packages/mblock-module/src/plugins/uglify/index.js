
import plugins from '../plugins'

export default (options = {}) => (setup = {}) => {
  const {webpack} = setup.modules
  const environment = process.env.NODE_ENV
  const pluginsList = []

  if (environment === 'production') {
    pluginsList.push(new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      uglifyOptions: {
        ie8: false,
        mangle: true
      },
      ...options
    }))
  }

  return plugins(
    ...pluginsList
  )(setup)
}
