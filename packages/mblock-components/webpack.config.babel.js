import { join } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { use, build } from 'mblock-module'
import { hotReload } from 'mblock-react/plugins'
import pkg from './package'
import {
  base,
  babel,
  entry,
  output,
  enviromnent,
  resolve,
  extractCss,
  file,
  uglify
} from 'mblock-module/plugins'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const sourcePath = join(__dirname, 'src')
const outputPath = join(__dirname, 'dist')

use(
  babel(),
  hotReload(),
  entry({
    index: [
      './index.js'
    ]
  }),
  output({
    path: outputPath,
    chunkFilename: '[id].chunk.js',
    filename: `index.js`,
    publicPath: '/',
    library: 'umd'
  }),
  enviromnent(),
  resolve({ mainFields: [ 'main' ] }),
  file(),
  uglify(),
  base({
    devtool: 'none',
    context: sourcePath,
    module: [
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    ]
  })
)

export default build

