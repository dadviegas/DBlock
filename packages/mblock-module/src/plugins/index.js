import babelPlugin from './babel'
import entryPlugin from './entry'
import outputPlugin from './output'
import modulePlugin from './module'
import moduleRule from './module/rules'
import aliasPlugin from './alias'
import resolvePlugin from './resolve'
import enviromnentPlugin from './enviromnent'

import uglifyPlugin from './uglify'
import extractCssPlugin from './extractCss'
import commonsChunkPlugin from './commonsChunk'
import htmlPlugin from './html'
import filePlugin from './file'
import devServerPlugin from './devServer'

import dllCreatePlugin from './dll/create'
import dllReferencePlugin from './dll/reference'
import basePlugin from './base'
import compressionPlugin from './compression'

export const compression = compressionPlugin
export const babel = babelPlugin
export const entry = entryPlugin
export const output = outputPlugin
export const module = modulePlugin
export const alias = aliasPlugin
export const enviromnent = enviromnentPlugin
export const resolve = resolvePlugin
export const base = basePlugin
export const moduleRules = moduleRule

export const uglify = uglifyPlugin
export const extractCss = extractCssPlugin
export const commonsChunk = commonsChunkPlugin
export const html = htmlPlugin
export const file = filePlugin
export const devServer = devServerPlugin
export const dllCreate = dllCreatePlugin
export const dllReference = dllReferencePlugin
