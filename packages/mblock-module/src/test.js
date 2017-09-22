// Added to support async
import 'babel-polyfill'
import { use, build, configuration } from './index'
import { babel, entry, output, alias, enviromnent } from './plugins'

use(
  babel(),
  entry({
    index: ['hotreload.js']
  }),
  output({
    filename: '[name].js'
  }),
  enviromnent()
)
use(alias({'module': 'modulePath'}))

configuration({
  entry: {
    index: ['index.js'],
    clock: ['clock.js']
  }
})

const conf = build({ env: 'development' })

console.log(conf.options)
