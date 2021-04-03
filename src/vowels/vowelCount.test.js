import { expect } from "@jest/globals";
import vowelCount from "./vowelCount"

describe('vowelCount method', () => {
  it('counts the number of vowels in a string', () => {
    expect(vowelCount('string')).toBe(1);
    expect(vowelCount('mississippi')).toBe(4);
    expect(vowelCount('why')).toBe(0);
  })
})

