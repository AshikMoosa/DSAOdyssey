/* Given an array nums of n integers, return true if the array nums is sorted 
in non-decreasing order or else false.

Examples:
Input : nums = [1, 2, 3, 4, 5]
Output : true

Input : nums = [1, 2, 1, 4, 5]
Output : false */

// Appr1 - BF - 2nested loops and compare with each index greater
// Appr2 - Loop once and check whether i+1 < i elem

function isSorted(arr, n) {
  //your code goes here
  for (let i = 0; i < n; i++) {
    if (arr[i + 1] < arr[i]) return false;
  }
  return true;
}

console.log(isSorted([1, 2, 3, 2, 5], 5));
