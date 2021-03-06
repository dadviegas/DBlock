import compose from 'mblock-utils/compose'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { default as settingBase } from './setting'
import modules from './modules'
import plugins from './plugins'
import configurationSetup from './configuration'

const isProduction = process.env.NODE_ENV === 'production'

const baseWebpackOption = (options = {}) => ({
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  output: {
    // Tell webpack to include comments in bundles with information about the contained modules.
    pathinfo: !isProduction
  },
  resolve: { },
  module: {
    rules: []
  },
  plugins: options && options.analyzer ? [new BundleAnalyzerPlugin()] : [],
  stats: 'normal'
})

export const setupBuild = (options = {}) => ({
  options: baseWebpackOption(options),
  configuration: configurationSetup(options),
  modules,
  plugins
})

// return only the webpack configuration
export const getWebpackConfiguration = setup => {
  return setup.options
}
export const getConfiguration = setup => setup.configuration

const pluginsList = []
let configurationOptions

export const configuration = (options = {}) => {
  if (configurationOptions) throw Error('Configuration has already set')
  configurationOptions = setting(options)
}

export const use = (...obj) => {
  Array.prototype.push.apply(pluginsList, obj)
}

export const build = (options = {}) => {
  configurationOptions && pluginsList.push(configurationOptions)
  pluginsList.unshift(getWebpackConfiguration)
  return compose(...pluginsList, setupBuild)(options)
}

export const setting = settingBase
