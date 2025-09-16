import reverseArr from "./0-GlobalReverse.js";

/* Given an integer array nums and a non-negative integer k, rotate the array to the left by k steps.

Examples:
Input: nums = [1, 2, 3, 4, 5, 6], k = 2
Output: nums = [3, 4, 5, 6, 1, 2]
Explanation: rotate 1 step to the left: [2, 3, 4, 5, 6, 1]
rotate 2 steps to the left: [3, 4, 5, 6, 1, 2] */

// Algo - number of rotation will always be k = k % n, consider k=9  => 4 + 4 + 1
// Appr 1 - Brute - use temp var and loop through array - O(n*k) or O(n^2) if k=n & S(1)
function kRotateArrayBF(arr, n, k) {
  while (k != 0) {
    let temp = arr[0];
    for (let i = 1; i < n; i++) {
      arr[i - 1] = arr[i];
    }
    arr[n - 1] = temp;
    k--;
  }
  return arr;
}

console.log(kRotateArrayBF([-1, 0, 3, 6], 4, 3));

// Appr 2 - Better solution - O(n) & S(n) - Extra space temp array
/*
Complexity Summary
Total Time: O(n)
Derivation: We add up all the time complexities of the operations:
O(1) (modulo) + O(k) (slice) + O(n−k) (first loop) + O(1) (j assign) + O(k) (second loop) + O(1) (return)
Total: O(k+(n−k)+k)
Simplified: O(n+k)
Because you correctly use k = k % n, k is always less than n. The runtime is therefore bounded by O(n+n), which is O(2n).
We drop the constant, so the final time complexity is O(n).
Total Space: O(k)
Derivation: You are not creating any new data structures except for the temp array.
The size of the temp array is k.
Therefore, your extra space complexity is O(k).
*/
function kRotateArrayBT(arr, n, k) {
  k = k % n; // Handling unwanted thousands of rotation - eg above in algo - O(1) & S(1)

  const temp = arr.slice(0, k); // O(k) & S(k)

  // shift elements from kth position to left k times - O(n - k) & S(1)
  for (let i = k; i < n; i++) {
    arr[i - k] = arr[i];
  }

  // copy remaining last k elements
  let j = 0; // O(1) & S(1)
  // Time and space for this loop  - O(k) & S(1)
  for (let m = n - k; m < n; m++) {
    arr[m] = temp[j];
    j++;
  }
  return arr; // O(1) & S(1)
}
console.log(kRotateArrayBT([1, 2, 3, 4, 5, 6], 6, 6));

// Appr 3 - Optimal - O(n) & S(1)
/* Algo -  algorithm has 3 steps:
Reverse the first k elements (from index 0 to k-1).
Reverse the remaining n-k elements (from index k to n-1).
Reverse the entire array. 
*/
function kRotateArray(arr, n, k) {
  k = k % n; // Mandatory conditions else reverse fails at higher rotation values > n , 7
  reverseArr(arr, 0, k - 1); // [**2, 1**, 3, 4, 5, 6]
  reverseArr(arr, k, n - 1); // [2, 1, **6, 5, 4, 3**]
  reverseArr(arr); // [**3, 4, 5, 6, 1, 2**]
  return arr;
}

console.log(kRotateArray([1, 2, 3, 4, 5, 6], 6, 2));
