import resolve from '../resolve'

export default (options = {}) => (setup = {}) => {
  resolve({ alias: options })(setup)

  return setup
}
