  export default (options = {}) => (setup = {}) => {
    const _options = {
      devServer: {
        historyApiFallback: true,
        port: 8080,
        hot: true,
        stats: { colors: true },
        ...options
      }
    }

    setup.options = setup.modules.merge(setup.options, _options)
    return setup
  }
