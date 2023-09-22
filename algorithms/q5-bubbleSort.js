/**
 * Bubble Sort works by taking an array of integers as input and returns an array of these integers in sorted order from least to greatest.
 * Time Complexity: O(n^2)
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