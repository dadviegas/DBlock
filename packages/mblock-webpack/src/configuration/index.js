export default (options = {}) => {
  return {
    isProduction: process.env.NODE_ENV === 'production',
    isDevelopment: process.env.NODE_ENV === 'development',
    ...options
  }
}
