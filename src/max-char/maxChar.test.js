import maxChar from './maxChar';

describe(('maxChar method'), () => {
  it("should return the most numerous character in a string", () => {
   expect(maxChar("bob")).toBe('b');
   expect(maxChar("this is it")).toBe('i');
   expect(maxChar("go hang a salami I'm a lasagna hog")).toBe('a');
 });
})