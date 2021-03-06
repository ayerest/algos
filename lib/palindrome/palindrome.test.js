"use strict";

var _palindrome = _interopRequireDefault(require("./palindrome"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('palindrome method', () => {
  it("Should verify if a string is a palindrome", () => {
    expect((0, _palindrome.default)("What is up?")).toBe(false); //  expect(palindrome("go hang a salami I'm a lasagna hog")).toBe(true);
  });
});