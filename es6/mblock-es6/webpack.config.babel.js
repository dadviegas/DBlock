import "./build.setup"
import { build } from 'mblock-webpack'
import { join } from 'path'

const appFolder = (folder) => join(__dirname, folder)

const sourcePath = appFolder('src')
const outputPath = appFolder('dist')

// function to be called when webpack is called
// we can pass variables from the command
export default (env = {}) => {
  // on the plugins will be available on setup.configuration
  // example: setup.configuration.outputPath
  const environment = {
    ...env,
    sourcePath,
    outputPath
  }

  // Generate webpack configuration based on partials
  return build(environment)
}
