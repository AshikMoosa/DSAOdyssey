/* Given an integer array nums and a non-negative integer k, rotate the array to the left by k steps.

Examples:
Input: nums = [1, 2, 3, 4, 5, 6], k = 2
Output: nums = [3, 4, 5, 6, 1, 2]
Explanation: rotate 1 step to the left: [2, 3, 4, 5, 6, 1]
rotate 2 steps to the left: [3, 4, 5, 6, 1, 2] */

// Appr 1 - BF - use temp var and loop through array - O(n*k) or O(n^2) if k=n
function kRotateArray(arr, n, k) {
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

console.log(kRotateArray([-1, 0, 3, 6], 4, 3));
