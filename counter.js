/**
 * @see {@link https://leetcode.com/problems/counter/description/}
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    let c = n;
    return function () {
        return c++;
    };
};


const counter = createCounter(10)
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
