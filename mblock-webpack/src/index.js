import compose from 'mblock-utils/compose'
import { setting } from 'mblock-module/plugins'
import modules from './modules'
import configurationSetup from './configuration'

export const setupBuild = (options) => ({
  options: {},
  configuration: configurationSetup(options),
  modules
})

// return only the webpack configuration
export const getWebpackConfiguration = setup => setup.options
export const getConfiguration = setup => setup.configuration

const plugins = []
let configurationOptions

export const configuration = (options = {}) => {
  if (configurationOptions) throw Error('Configuration has already set')
  configurationOptions = setting(options)
}

export const use = (...obj) => Array.prototype.push.apply(plugins, obj)
export const build = (options) => {
  configurationOptions && plugins.unshift(configurationOptions)
  plugins.unshift(getWebpackConfiguration)
  return compose(...plugins, setupBuild)(options)
}
