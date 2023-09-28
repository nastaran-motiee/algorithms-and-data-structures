/**
 * @see {@link https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update}
 * @param {Array.<Array.<(number|string)>>} arr1
 * @param {Array.<Array.<(number|string)>>} arr2
 * @returns
 */
function updateInventory(arr1, arr2) {
  let temp = [];

  for (let i = 0; i < arr1.length; i++) {
    temp.push(arr1[i][1]);
  }

  for (let i = 0; i < arr2.length; i++) {
    var index = temp.indexOf(arr2[i][1]);
    index > -1
      ? (arr1[index] = [arr1[index][0] + arr2[i][0], arr1[index][1]])
      : arr1.push(arr2[i]);
  }

  //Sort alphabetically
  for (let z = 0; z < arr1.length; z++) {
    for (let i = 0, j = i + 1; j < arr1.length; i++, j++) {
      if (arr1[i][1] > arr1[j][1]) {
        temp = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp;
      }
    }
  }

  return arr1;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

console.log(updateInventory(newInv, curInv));
