import reverseInt from './reverseInt';

describe(('reverseInt method'), () => {
  it("Should reverse the digits in an integer", () => {
   expect(reverseInt(12)).toBe(21);
 });
})