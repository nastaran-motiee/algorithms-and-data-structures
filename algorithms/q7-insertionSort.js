/**
 * @see {@link https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort}
 * @param {number[]} array
 * @returns {number[]} sorted array ordered from least to greatest
 */
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (key < array[j] && j >= 0) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}

console.log(insertionSort([3, 2, 1]));
