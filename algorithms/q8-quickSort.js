/**
 * Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array.
 * In this method, a pivot value is chosen in the original array.
 * The array is then partitioned into two subarrays of values less than and greater than the pivot value.
 * We then combine the result of recursively calling the quick sort algorithm on both sub-arrays.
 * This continues until the base case of an empty or single-item array is reached, which we return.
 * The unwinding of the recursive calls return us the sorted array.
 * Time Complexity: O(nlog(n))
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
 *
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
