/**
 * @see {@link https://leetcode.com/problems/two-sum/}
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hash = {};
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        let complementary = hash[target - nums[i]];
        if (complementary !== undefined) {
            return [complementary, i];
        }
        hash[nums[i]] = i;

    }

};


console.log(twoSum([2, 7, 11, 15], 17));