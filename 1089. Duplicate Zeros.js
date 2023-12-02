/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

// my own first solution. O(n ^ 2)
    // not optimal. it can be done with O(n) time complexity.
var duplicateZeros = function(arr) {
    var i = 0;
    while(i < arr.length) {
        if(arr[i] === 0) {
            for(j = arr.length - 1; j > i; j--) {
                arr[j] = arr[j-1];
            }
            i += 2
        } else {
            i++
        }
    }
};
