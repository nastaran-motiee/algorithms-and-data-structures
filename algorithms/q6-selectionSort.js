/**
 * Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list.
 * It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element.
 * It continues iterating through the list and swapping elements until it reaches the end of the list.
 * Time Complexity: O(n^2)
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
 *
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
