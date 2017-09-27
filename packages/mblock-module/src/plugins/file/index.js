import rule from '../module/rules'

const getDefault = (options = {}) => rule({
  test: /\.(gif|png|jpg|jpeg\ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
  use: 'file-loader',
  ...options
})

export default (options = {}) => (setup = {}) => {
  return getDefault(options)(setup)
}
