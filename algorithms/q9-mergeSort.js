/**
 * @see {@link https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-merge-sort}
 * @param {number[]} array
 * @returns {number} Sorted array
 */
function mergeSort(array) {
  if (array.length === 1 || array.length === 0) {
    return array;
  }

  const splitIndex = Math.floor(array.length / 2);
  return merge(
    mergeSort(array.slice(0, splitIndex)),
    mergeSort(array.slice(splitIndex))
  );
}

/**
 * Merge two sorted arrays
 * @param {number[]} arr1 Sorted array
 * @param {number[]} arr2 Sorted array
 * @returns {number[]} Sorted merge of arr1 and arr2
 */
function merge(arr1, arr2) {
  let merged = [];
  while (arr1.length !== 0 && arr2.length !== 0) {
    if (arr1[0] < arr2[0]) {
      merged.push(arr1.shift());
    } else if (arr2[0] < arr1[0]) {
      merged.push(arr2.shift());
    } else {
      merged.push(arr1.shift(), arr2.shift());
    }
  }
  return [...merged, ...arr1, ...arr2];
}

console.log(
  mergeSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
);
