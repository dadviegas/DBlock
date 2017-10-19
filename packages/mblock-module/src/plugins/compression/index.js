import plugins from '../plugins'

export default (options = {}) => (setup = {}) => {
  const {CompressionPlugin} = setup.plugins
  const environment = process.env.NODE_ENV
  if (environment === 'development') {
    return setup
  }

  return plugins(
    new CompressionPlugin({
      ...options
    })
  )(setup)
}
