import reverseString from '../str-reversal/reverseString';

const reverseInt = (num) => {
  const str = num.toString();
  const reversed = reverseString(str);
  return parseInt(reversed);
}

export default reverseInt;