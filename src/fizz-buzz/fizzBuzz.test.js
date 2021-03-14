import fizzBuzz from './fizzBuzz';

describe(('fizzBuzz method'), () => {
  it("should output a mix of numbers and fizzes and buzzes", () => {
    const fizzBuzzOutput = fizzBuzz(30);  
    expect(fizzBuzzOutput[0]).toBe(1);
    expect(fizzBuzzOutput[2]).toBe('Fizz');
    expect(fizzBuzzOutput[4]).toBe('Buzz');
    expect(fizzBuzzOutput[14]).toBe('FizzBuzz');
    expect(fizzBuzzOutput[22]).toBe(23);
  });
})