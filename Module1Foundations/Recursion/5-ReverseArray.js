/* Given an array arr of n elements. The task is to reverse the given array. 
The reversal of array should be inplace.

Examples:
Input: n=5, arr = [1,2,3,4,5]
Output: [5,4,3,2,1]
Explanation: The reverse of the array [1,2,3,4,5] is [5,4,3,2,1] */

// Brute Force - Returns newly constructed resultant array
/* function reverse(arr, n) {
  if (n === 0) return []; // Base case: empty array.
  // Take the last element and concatenate with the reverse of the rest.
  return [arr[n - 1]].concat(reverse(arr, n - 1));
}
 */
// Example usage:
// console.log(reverse([1, 2, 3, 4, 5], 5)); // Output: [5, 4, 3, 2, 1]

// Optimised - inplace
function reverse(arr, n) {
  function helper(start, end) {
    if (start >= end) return; // Base case: nothing to swap.
    // Swap the elements at index start and end.
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    // Recurse for the inner subarray.
    helper(start + 1, end - 1);
  }
  helper(0, n - 1);
  return arr;
}

// Example usage:
console.log(reverse([1, 2, 3, 4, 5], 5)); // Output: [5, 4, 3, 2, 1]
