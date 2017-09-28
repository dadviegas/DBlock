export default (options = {}) => (setup = {}) => {
  const entryObj = {}

  if (process.env.NODE_ENV === 'development') {
    Object.keys(setup.options.entry).forEach((key) => {
      entryObj[key] = [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        ...setup.options.entry[key]
      ]
    })

    setup.options.entry = entryObj
  }

  return setup
}
