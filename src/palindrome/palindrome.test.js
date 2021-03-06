import { expect } from '@jest/globals';
import palindrome from './palindrome';

describe(('palindrome method'), () => {
  it("Should verify if a string is a palindrome", () => {
   expect(palindrome("What is up?")).toBe(false);
   expect(palindrome("bob")).toBe(true);
   expect(palindrome("this is it")).toBe(false);
   expect(palindrome("go hang a salami I'm a lasagna hog")).toBe(true);
 });
})