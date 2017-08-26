import { use, build, configuration } from 'mblock-webpack'
// import { setting } from 'mblock-webpack/helpers'
import { babel, entry, output } from './plugins'

use(
  babel(),
  entry({
    index: ['./a'],
    b: ['./b'],
    c: ['./c', './d']
  }),
  output({
    path: 'dist',
    filename: '[name].entry.js'
  })
)

configuration({
  entry: {
    index: ['index.js'],
    clock: ['clock.js']
  },
  output: {
    library: 'umd'
  }
})

const conf = build({env: 'development'})

console.log(conf)
