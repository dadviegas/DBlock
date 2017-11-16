import { use, build, setting } from 'mblock-webpack'
import { join } from 'path'

const sourcePath = join(__dirname, 'src')
const outputPath = join(__dirname, 'dist')

const options1 = {
  context: sourcePath,
  entry: {
    index: ['./index']
  }
}

const options2 = {
  output: {
    path: outputPath,
    chunkFilename: '[id].chunk.js',
    filename: '[name].js',
    publicPath: '/'
  }
}


use(setting(options1),
(setup) => {
  setup.options = setup.modules.merge(setup.options, options2)
  return setup
})

export default build
