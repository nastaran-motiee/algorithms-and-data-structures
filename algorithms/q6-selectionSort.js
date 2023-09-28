/**
 * @see {@link https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort}
 * @param {number[]} array
 * @returns {number[]} Sorted array
 */
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      swap(array, i, indexOfMin);
    }
  }

  return array;
}

/**
 * Swap arr[i], arr[j]
 * @param {number[]} array
 * @param {number} a
 * @param {number} b
 */
function swap(array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

console.log(selectionSort([4, 5, 2, 0, 3, 10, 1]));
