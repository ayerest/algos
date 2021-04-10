import { expect, it } from '@jest/globals';
import chunk from './chunk';

describe('chunk method', () => {
  it('splits an array input into a list of arrays of given length', () => {
    expect(chunk([1,2,3,4], 2)).toStrictEqual([[1,2], [3,4]]);
    expect(chunk([1,2,3,4], 3)).toStrictEqual([[1,2,3], [4]]);
  })
})