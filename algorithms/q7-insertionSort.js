/**
 * Insertion Sort works by building up a sorted array at the beginning of the list.
 * It begins the sorted array with the first element.
 * Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position.
 * It continues iterating through the list and swapping new items backwards into the sorted portion until it
 * reaches the end.
 * Time Complexity: O(n^2)
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
