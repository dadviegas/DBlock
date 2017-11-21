import { use, setting } from 'mblock-webpack'
import { join } from 'path'

const outputPath = join(__dirname, '../dist')

const webpackConf = {
  output: {
    path: outputPath,
    chunkFilename: '[id].chunk.js',
    filename: '[name].js',
    publicPath: '/'
  }
}

use(
  setting(webpackConf)
)
