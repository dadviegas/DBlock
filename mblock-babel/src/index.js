const defaultWebpackBabelConfiguration = {
  'presets': [
    ['env', {
      'targets': {
        'browsers': ['last 3 versions']
      },
      'modules': false
    }]
  ]
}

export default function (options) {
  return options || defaultWebpackBabelConfiguration
}
