import { entry } from 'mblock-module/plugins'

export default (options = {}) => (setup = {}) => {
  if (process.env.NODE_ENV === 'development') {
    const entryObj = {}
    Object.keys(setup.options.entry).forEach((key) => {
      entryObj[key] = [
        'react-hot-loader/patch',
        ...setup.options.entry[key]
      ]
    })

    console.log('entryObj', entryObj)
    entry(entryObj)(setup)
  }

  return setup
}
