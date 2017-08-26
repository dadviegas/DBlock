'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _compose = require('../compose');

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (...fns) => _compose2.default.apply(_compose2.default, fns.reverse());