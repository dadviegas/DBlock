
import plugins from '../plugins'

export default (options = {}) => (setup = {}) => {
  const {webpack} = setup.modules
  const environment = process.env.NODE_ENV
  console.log('using environment', environment)
  const pluginsList = [
    new webpack.NoEmitOnErrorsPlugin(),
    new setup.plugins.CaseSensitivePlugin(),
    // new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: environment || 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: environment === 'development',
      ...options
    })
  ]

  if (environment === 'production') {
    pluginsList.push(new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      uglifyOptions: {
        ie8: false,
        mangle: true
      }
    }))

    pluginsList.push(new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(environment)
      }
    }))
  }

  plugins(
    ...pluginsList
  )(setup)

  return setup
}
