/**
 * @see {@link https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-bubble-sort }
 * @param {number[]} array
 * @returns array of integers in sorted order from least to greatest
 */
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swapped = true;
        //swap
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return array;
}

console.log(bubbleSort([3, 2, 1]));
