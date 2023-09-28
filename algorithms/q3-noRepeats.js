/**
 * Swap between arr[i], arr[j]
 * @param {string[]} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * @see {@link https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please}
 * @param {string} str 
 * @returns 
 */
function permAlone(str) {
  let allPerms = [];
  let reg = /(.)\1+/;
  let count = 0;

  const heapPerm = (arr, k) => {
    if (k === 1) {
      if (!arr.join("").match(reg)) {
        count += 1;
      }
      return;
    }

    for (let i = 0; i < k; i++) {
      heapPerm(arr, k - 1);
      //if k is odd swap between arr[0] and arr[k-1]
      //else swap between arr[i] and arr[k-1]
      if (k % 2 === 1) {
        swap(arr, 0, k - 1);
      } else {
        swap(arr, i, k - 1);
      }
    }
  };

  heapPerm(str.split(""), str.length);

  return count;
}

console.log(permAlone("1221"));
