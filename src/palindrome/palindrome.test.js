import { expect } from '@jest/globals';
import palindrome from './palindrome';

describe(('palindrome method'), () => {
  it("Should verify if a string is a palindrome", () => {
   expect(palindrome("What is up?")).toBe(false);
   expect(palindrome('gohangasalamiimalasagnahog')).toBe(true);
 });
})