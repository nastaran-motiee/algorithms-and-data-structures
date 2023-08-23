/*
Return the number of total permutations of the provided string that don't have repeated consecutive letters.
Assume that all characters in the provided string are each unique.
For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/


function heapPerm(arr, k) {

    if (k === 1) {
        console.log(arr.join(""));
    }

    for (let i = 0; i < k; i++) {
        heapPerm(arr, k - 1);

        if (k % 2 === 1) {
            let temp = arr[0];
            arr[0] = arr[k - 1];
            arr[k - 1] = temp;
        } else {
            let temp = arr[i];
            arr[i] = arr[k - 1];
            arr[k - 1] = temp;
        }

    }
}


function permAlone(str) {
    heapPerm(str.split(""), str.length);

    return str;
}

permAlone('123');
