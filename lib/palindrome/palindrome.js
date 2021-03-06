"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.array.reverse.js");

const palindrome = string => {
  const chars = string.split('');
  return chars.reverse().join("") === string;
};

var _default = palindrome;
exports.default = _default;