
import plugins from '../plugins'
import rule from '../module/rules'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const getDefault = (options = {}, resolvePath, extractCSS) => rule({
  test: /\.scss$/,
  include: resolvePath('./src'),
  use: process.env.NODE_ENV === 'production'
    ? extractCSS.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'sass-loader']
    })
    : ['style-loader', 'css-loader', 'sass-loader']
})

export default (options = {}) => (setup = {}) => {
  const {resolvePath} = setup.modules
  const extractCSS = new ExtractTextPlugin(options)
  const pluginsList = [
    extractCSS
  ]

  plugins(...pluginsList)(setup)

  getDefault(options, resolvePath, extractCSS)(setup)

  return setup
}
