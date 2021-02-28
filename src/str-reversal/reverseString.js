const reverseString = (string) => {
  let reversed = ''
  for (let char in string) {
    reversed = string[char] + reversed
  }
  return reversed;
};


export default reverseString; 