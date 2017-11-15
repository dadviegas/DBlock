
import plugins from '../plugins'

export default (options = {}) => (setup = {}) => {
  const {webpack} = setup.modules
  const environment = process.env.NODE_ENV
  const pluginsList = []

  if (environment === 'production') {
    pluginsList.push(new webpack.optimize.UglifyJsPlugin({
      test: /\.js($|\?)/i,
      sourceMap: true,
      uglifyOptions: {
        compress: true
      }
    }))
  }

  return plugins(
    ...pluginsList
  )(setup)
}
