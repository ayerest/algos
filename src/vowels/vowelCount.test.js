import vowelCount from "./vowelCount"

describe('vowelCount method', () => {
  it('counts the number of vowels in a string', () => {
    expect(vowelCount('string').toBe(1));
    epxect(vowelCount('butt').toBe(1));
  })
})

