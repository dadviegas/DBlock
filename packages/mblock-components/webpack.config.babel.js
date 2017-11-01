import { join, resolve as resolvePath } from 'path'
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
import webpack from 'webpack'

const sourcePath = join(__dirname, 'src')
const outputPath = join(__dirname, 'dist')

use(
  babel({
    include: sourcePath // /markdown-it-mermaid|markdown-it-highlightjs|markdown-it-footnote|markdown-it-anchor|markdown-it-attrs|markdown-it-checkbox|markdown-it-emoji|markdown-it-fontawesome|markdown-it-center-text/
  }),
  entry({
    index: [
      './index.js'
    ]
  }),
  output({
    path: outputPath,
    chunkFilename: '[id].chunk.js',
    filename: `index.js`,
    publicPath: '/'
  }),
  extractCss({ filename: 'style.css' }),
  enviromnent(),
  resolve({
    mainFields: [ 'main' ]
  }),
  uglify(),
  base({
    devtool: 'none',
    context: sourcePath,
    stats: 'verbose'
  })
)

export default build
