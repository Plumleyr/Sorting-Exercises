function insertionSort(arr) {
  let position = 1;

  while (position < arr.length) {
    let current = position;
    let i = current - 1;
    while (arr[current] < arr[i]) {
      let temp = arr[current];
      arr[current] = arr[i];
      arr[i] = temp;
      current--;
      i--;
    }
    position++;
  }
  return arr;
}

module.exports = insertionSort;
