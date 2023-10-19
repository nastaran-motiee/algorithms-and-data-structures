/**
 * @see {@link https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150}
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let last = k % nums.length;

  if (nums.length > 1 && last !== 0) {
    let start = nums.length - last;
    nums.splice(
      last,
      nums.length,
      ...nums.splice(0, start, ...nums.slice(-last))
    );
  }

  return nums;
};
