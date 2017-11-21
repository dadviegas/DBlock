import { use, build, setting } from 'mblock-webpack'
import { join } from 'path'

const sourcePath = join(__dirname, '../src')
const outputPath = join(__dirname, '../dist')

const webpackConf = {
  context: sourcePath,
  entry: {
    index: ['./index']
  }
}

use(
  setting(webpackConf)
)
