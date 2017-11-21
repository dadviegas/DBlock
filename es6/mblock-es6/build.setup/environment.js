import { use, setting } from 'mblock-webpack'
import { join } from 'path'
var path = require("path")

const provideConf = {
  '__environment__': path.resolve(__dirname, '../src/environment')
}

use(setting(provideConf, (options, setup) => {
  const { webpack } = setup.modules
  const environment = setup.configuration.environment

  return {
    plugins: [
      new webpack.EnvironmentPlugin({
        NODE_ENV: environment || 'development', // use 'development' unless process.env.NODE_ENV is defined
        DEBUG: environment === 'development',
        ...options
      })
    ]
  }
}))
