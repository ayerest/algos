const maxChar = (string) => {
  const myHash = {};
  const noSpaceZone = string.trim().split('')
  noSpaceZone.forEach((char) => {
    if (myHash[char]) {
      myHash[char] += 1
    } else {
      myHash[char] = 1
    }
  })
  let max = 0;
  let myChar = '';
  noSpaceZone.forEach((char) => {
    if (myHash[char] > max) {
      max = myHash[char];
      myChar = char; 
    } 
  })
  return myChar;
  
}

export default maxChar;