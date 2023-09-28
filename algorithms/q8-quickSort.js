/**
 * @see {@link https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-quick-sort}
 * @param {number[]} array
 * @param {number} left
 * @param {number} right
 * @returns {number[]} Sorted array
 */

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivot = partition(array, left, right);
    quickSort(array, left, pivot - 1);
    quickSort(array, pivot + 1, right);
  }
  return array;
}

/**
 * Partition the array using the last element as the pivot
 * @param {number[]} array
 * @param {number} start
 * @param {number} end
 * @returns {number} Pivot index
 */
function partition(array, start, end) {
  let pivot = array[start];
  let low = start + 1;
  let high = end;

  while (low < high) {
    while (array[low] <= pivot) {
      low++;
    }
    while (array[high] > pivot) {
      high--;
    }
    if (low < high) {
      swap(array, low, high);
    }
  }

  swap(array, start, high);

  return high;
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

console.log(
  quickSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
);
