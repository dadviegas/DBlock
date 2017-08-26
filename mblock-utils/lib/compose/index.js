"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));