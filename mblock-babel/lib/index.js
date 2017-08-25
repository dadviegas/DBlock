'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  return options || defaultWebpackBabelConfiguration;
};

var defaultWebpackBabelConfiguration = {
  'presets': [['env', {
    'targets': {
      'browsers': ['last 3 versions']
    },
    'modules': false
  }]]
};