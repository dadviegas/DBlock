export default (options = {}) => {
  const setup = options.env || {}
  return {
    NODE_ENV: 'development',
    ...setup
  }
}
