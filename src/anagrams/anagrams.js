const anagrams = (stringA, stringB) => {
  const stringASorted = stringA.split('').sort().join('');
  const stringBSorted = stringB.split('').sort().join('');
  return stringASorted === stringBSorted
}

export default anagrams;