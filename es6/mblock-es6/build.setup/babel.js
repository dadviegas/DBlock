import { use, setting } from 'mblock-webpack'
import { join } from 'path'

const webpackConf = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: ['node_modules'],
      include: '',
      loader: 'babel-loader'
    }]
  }
}

use(
  setting(webpackConf, (options, setup) => {
    options.module.rules[0].include = setup.configuration.sourcePath
    return options
  })
)
