import { expect } from '@jest/globals';
import reverseInt from './reverseInt';

describe(('reverseInt method'), () => {
  it("Should reverse the digits in an integer", () => {
   expect(reverseInt(12)).toBe(21);
   expect(reverseInt(1)).toBe(1);
   expect(reverseInt(123483249823487)).toBe(784328942384321);
 });
})