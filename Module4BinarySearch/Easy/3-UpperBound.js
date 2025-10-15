/* Given a sorted array of nums and an integer x, write a program to find the upper bound of x.
The upper bound of x is defined as the smallest index i such that nums[i] > x.
If no such index is found, return the size of the array.

Examples:
Input : n= 4, nums = [1,2,2,3], x = 2
Output:3
Explanation:
Index 3 is the smallest index such that arr[3] > x. */

// Appr 1 - Brute - Linear Search - O(n) & S(1)
function upperBoundBF(arr, n, target) {
  for (let i = 0; i < n; i++) {
    if (arr[i] > target) return i;
  }
  return n;
}

console.log(upperBoundBF([1, 2, 2, 3, 3], 5, 2));

// Appr 2 - Optimal - Binary Search - O(logn) & S(1)
function upperBound(arr, n, target) {
  let start = 0;
  let end = arr.length - 1;
  let upperBound = n; // setting - index not found, return n length of array

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] > target) {
      upperBound = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return upperBound;
}

console.log(upperBound([1, 2, 2, 3, 3], 5, 2));

export default upperBound;
