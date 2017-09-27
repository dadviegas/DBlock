import webpack from 'webpack'
import merge from 'webpack-merge'
import path from 'path'

export default {
  webpack,
  merge,
  resolvePath: (pathname = '') => path.resolve(process.cwd(), pathname)
}
