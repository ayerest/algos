import anagrams from './anagrams';

describe('anagrams method', () => {
  it('should check if a string contains the same characters as another string', () => {
    expect(anagrams('grape', 'pager')).toBe(true);
    expect(anagrams('bob', 'rob')).toBe(false);
    expect(anagrams('star', 'arts')).toBe(true);
  })
})