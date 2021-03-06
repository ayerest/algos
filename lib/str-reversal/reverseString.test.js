"use strict";

var _reverseString = _interopRequireDefault(require("./reverseString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('reverseString method', () => {
  it("Should reverse string", () => {
    expect((0, _reverseString.default)("What is up?")).toBe("?pu si tahW");
  });
});