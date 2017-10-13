
import plugins from '../plugins'
import rule from '../module/rules'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import happyPack from '../happypack'

const getDefault = (options = {}, resolvePath, extractCSS) => rule({
  test: /\.scss$/,
  include: resolvePath('./src'),
  use: process.env.NODE_ENV === 'production'
    ? extractCSS.extract({
      fallback: 'style-loader',
      use: 'happypack/loader?id=style'
    })
    : 'happypack/loader?id=style'
})

export default (options = {}) => (setup = {}) => {
  const {resolvePath} = setup.modules
  const environment = process.env.NODE_ENV
  const extractCSS = new ExtractTextPlugin(options)
  const pluginsList = [
    extractCSS
  ]

  if (environment === 'production') {
    plugins(...pluginsList)(setup)
  }

  plugins(happyPack({
    id: 'style',
    loaders: process.env.NODE_ENV === 'development'
      ? ['style-loader', 'css-loader', 'sass-loader']
      : ['css-loader', 'sass-loader']
  }))(setup)

  getDefault(options, resolvePath, extractCSS)(setup)

  return setup
}
