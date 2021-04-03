const vowelCount = (string) => {
  const vowels = /[aeiou]/gi;
  const matches = string.match(vowels);
  return matches?.length || 0;
}

export default vowelCount;