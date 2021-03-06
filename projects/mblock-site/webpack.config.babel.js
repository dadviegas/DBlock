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
  uglify,
  commonsChunk,
  html,
  devServer,
  dllReference,
  compression
} from 'mblock-module/plugins'

const sourcePath = join(__dirname, 'src')
const outputPath = join(__dirname, 'dist')
const dllPath = join(__dirname, 'dll')


use(
  babel(),
  hotReload(),
  entry({
    index: [
      './js/index'
    ]
  }),
  output({
    path: outputPath,
    chunkFilename: '[id].chunk.js',
    filename: `[name].js`,
    publicPath: '/'
  }),
  enviromnent(),
  resolve({
    mainFields: [ 'browser', 'style', 'main' ]
  }),
  file(),
  // uglify(),
  html({
    title: 'React Boilerplate',
    template: join(__dirname, 'src', 'assets', 'index.ejs')
  }),
  devServer(),
  dllReference({
    // uses the webpack base context
    manifest: require(join(dllPath, 'vendor.json'))
  }),
  base({
    module: {
      rules: [
        {
          test: /\.md$/,
          use: 'raw-loader'
        },
        {
          test: /\.(scss|css)$/,
          use: ['style-loader', {
              loader: 'css-loader',
              options: { sourceMap: 1 }
          }, 'sass-loader']
        }
      ]
    },
    devtool: 'none',
    context: sourcePath,
  }),
  compression({
    asset: '[path].gz[query]'
  })
)

export default build

