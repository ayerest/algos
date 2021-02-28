import reverseString from './reverseString';

describe(('reverseString method'), () => {
  it("Should reverse string", () => {
   expect(reverseString("What is up?")).toBe("?pu si tahW");
 });
})