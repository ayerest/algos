"use strict";

var _reverseString = _interopRequireDefault(require("./reverseString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('reverseString method', () => {
  it("Should reverse string", () => {
    assert.equal((0, _reverseString.default)("What is up?"), "?pu si tahW");
  });
});