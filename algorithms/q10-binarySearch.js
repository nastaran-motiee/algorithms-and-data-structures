/**
 * @see {@link https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-binary-search}
 * @param {number[]} searchList Sorted array
 * @param {number} value Value to search in searchList
 * @returns {number[]|string}
 */
function binarySearch(searchList, value) {
  let arrayPath = [];
  let left = 0;
  let right = searchList.length - 1;
  while (left <= right) {
    let middleIndex = left + Math.floor((right - left) / 2);
    arrayPath.push(searchList[middleIndex]);

    if (searchList[middleIndex] > value) {
      right = middleIndex - 1;
    } else if (searchList[middleIndex] < value) {
      left = middleIndex + 1;
    } else {
      return arrayPath;
    }
  }
  return "Value Not Found";
}
const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70,
];

console.log(binarySearch(testArray, 1));
