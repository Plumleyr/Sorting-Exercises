function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowestIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestIdx]) {
        lowestIdx = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[lowestIdx];
    arr[lowestIdx] = temp;
  }
  return arr;
}

module.exports = selectionSort;
