/**
 * @see {@link https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150}
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let max = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let current_profit = prices[right] - prices[left];
      max = Math.max(max, current_profit);
    } else {
      left = right;
    }
    right++;
  }

  return max;
};
