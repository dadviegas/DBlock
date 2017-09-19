import { join } from 'path'
import { use, build } from 'mblock-module'
import { babel, entry, output, enviromnent } from 'mblock-module/plugins'

use(
  babel(),
  entry({
    index: ['./src/index.js']
  }),
  output({
    path: join(__dirname, 'lib'),
    filename: '[name].js'
  }),
  enviromnent()
)

export default (env) => {
  const conf = build({env})
  return conf.options
}
