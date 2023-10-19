/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    for(let i=0; i < nums.length; i++){
      nums.push(nums.shift());
    }
      return nums;
  };

console.log(rotate([1,2],4));