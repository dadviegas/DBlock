import babelPlugin from './babel'
import entryPlugin from './entry'
import outputPlugin from './output'
import modulePlugin from './module'
import moduleRule from './module/rules'
import aliasPlugin from './alias'
import resolvePlugin from './resolve'
import enviromnentPlugin from './enviromnent'

export const babel = babelPlugin
export const entry = entryPlugin
export const output = outputPlugin
export const module = modulePlugin
export const alias = aliasPlugin
export const enviromnent = enviromnentPlugin
export const resolve = resolvePlugin
export const moduleRules = moduleRule
