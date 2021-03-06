const palindrome = (string) => {
  const noSpaceZone = string.replace(/[\W_]+/g, '').toLowerCase();

  return noSpaceZone.split('').reverse().join("") === noSpaceZone
}

export default palindrome;