// Added to support async
import 'babel-polyfill'
import { use, build, configuration } from './index'
import { babel, setting, entry, output } from 'mblock-module/plugins'

use(
  babel(),
  entry({
    index: ['hotreload.js']
  }),
  output({
    filename: '[name].js'
  })
)

use(setting({resolve: {}}))
use(setting({asd: {}}))

configuration({
  entry: {
    index: ['index.js'],
    clock: ['clock.js']
  }
})

const conf = build({env: 'development'})

console.log(conf)
