"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const reverseString = string => {
  let reversed = '';

  for (let char in string) {
    reversed = string[char] + reversed;
  }

  return reversed;
};

var _default = reverseString;
exports.default = _default;