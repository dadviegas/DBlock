
import plugins from '../plugins'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default (options = {}) => (setup = {}) => {
  const isProduction = process.env.NODE_ENV === 'production'

  const pluginsList = [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      },
      production: isProduction,
      inject: true,
      ...options
    })
  ]

  return plugins(
    ...pluginsList
  )(setup)
}
