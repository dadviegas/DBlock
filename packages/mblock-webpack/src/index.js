import compose from 'mblock-utils/compose'
import setting from './setting'
import modules from './modules'
import plugins from './plugins'
import configurationSetup from './configuration'

const isProduction = process.env.production === true

const baseWebpackOption = {
  devtool: (() => {
    if (isProduction) return 'hidden-source-map'
    else return 'cheap-module-eval-source-map'
  })(),
  resolve: {},
  module: {
    rules: []
  },
  stats: 'normal'
}

export const setupBuild = (options) => ({
  options: baseWebpackOption,
  configuration: configurationSetup(options),
  modules,
  plugins
})

// return only the webpack configuration
export const getWebpackConfiguration = setup => setup.options
export const getConfiguration = setup => setup.configuration

const pluginsList = []
let configurationOptions

export const configuration = (options = {}) => {
  if (configurationOptions) throw Error('Configuration has already set')
  configurationOptions = setting(options)
}

export const use = (...obj) => Array.prototype.push.apply(pluginsList, obj)

export const build = (options) => {
  configurationOptions && pluginsList.push(configurationOptions)
  pluginsList.unshift(getWebpackConfiguration)
  return compose(...pluginsList, setupBuild)(options)
}