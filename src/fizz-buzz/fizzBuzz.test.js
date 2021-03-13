import fizzBuzz from './fizzBuzz';

describe(('fizzBuzz method'), () => {
  it("should output a mix of numbers and fizzes and buzzes", () => {
    const fizzBuzzOutput = fizzBuzz(30);  
    expect(fizzBuzzOutput[0]).toBe(1);
  });
})