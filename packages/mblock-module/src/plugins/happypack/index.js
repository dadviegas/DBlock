import os from 'os'
import HappyPack from 'happypack'

const threadPool = os.cpus().length
const happyThreadPool = HappyPack.ThreadPool({ size: threadPool })

export default (options = {}) => {
  return new HappyPack({
    threadPool: happyThreadPool,
    ...options
  })
}
