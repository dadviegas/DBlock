
import plugins from '../plugins'

export default (options = {}) => (setup = {}) => {
  const {webpack, resolvePath} = setup.modules
  const environment = process.env.NODE_ENV
  const pluginsList = [
    new webpack.NoEmitOnErrorsPlugin(),
    new setup.plugins.CaseSensitivePlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: environment || 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: environment === 'development',
      VERSION: require(resolvePath('package.json')).version,
      ...options
    }),
    new webpack.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    })
  ]

  if (environment !== 'development') {
    pluginsList.push(new webpack.optimize.ModuleConcatenationPlugin())
  }

  if (environment === 'development') {
    pluginsList.push(new webpack.NamedModulesPlugin())
  }

  return plugins(
    ...pluginsList
  )(setup)
}
