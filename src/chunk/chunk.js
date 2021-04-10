const chunk = (array, length) => {
  let newArray = [];
  let index = 0;
  while (index < array.length) {
    if (index + length > array.length) {
      newArray.push(array.slice(index))
    } else {
      newArray.push(array.slice(index, index + length))
    }
    index += length;
  }
  return newArray;
}

export default chunk;