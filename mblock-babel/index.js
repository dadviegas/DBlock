const defaultWebpackBabelConfiguration = {
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["last 3 versions"]
      },
      "modules": false
    }]
  ]
}

module.exports =  function (options) {
  return options || defaultWebpackBabelConfiguration
}
