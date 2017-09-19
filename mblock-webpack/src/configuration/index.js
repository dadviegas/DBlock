export default (options = {}) => {
  const setup = options.env || {}
  return {
    environment: 'development',
    ...setup
  }
}
