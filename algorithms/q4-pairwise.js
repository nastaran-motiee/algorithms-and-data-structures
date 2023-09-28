/**
 * @see {@link https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise}
 * @param {number[]} arr 
 * @param {number} arg 
 * @returns 
 */
function pairwise(arr, arg) {
    let allIndicesSum = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let pairIndicesSum = 0;
        let matchedIndex = -1;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === arg) {
                pairIndicesSum = i + j;
                matchedIndex = j;
                break;
            }

        }
        if (matchedIndex !== -1) {
            arr[matchedIndex] = undefined;
        }
        allIndicesSum += pairIndicesSum;
    }
    return allIndicesSum;
}



console.log(pairwise([1, 1, 1], 2));