/*
Excercise: 
Return the number of total permutations of the provided string that don't have repeated consecutive letters.
Assume that all characters in the provided string are each unique.
For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/



/**
 * Swap between arr[i], arr[j]
 * @param {Array.<string>} arr 
 * @param {int} i 
 * @param {int} j 
 */
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/**
 * Return the number of total permutations of the provided string that don't have repeated consecutive letters.
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
            //if k is even swap between arr[0] and arr[k-1]
            //else swap between arr[i] and arr[k-1]
            if (k % 2 === 1) {
                swap(arr, 0, k - 1);
            } else {
                swap(arr, i, k - 1)
            }

        }
    }

    heapPerm(str.split(""), str.length);


    return count;
}



console.log(permAlone('1221'));