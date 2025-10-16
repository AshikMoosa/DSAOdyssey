import firstLastOccurence from "./5-FirstLastOccurence.js";
/* You are given a sorted array of integers arr and an integer target. 
Your task is to determine how many times target appears in arr.
Return the count of occurrences of target in the array.

Examples:
Input: arr = [0, 0, 1, 1, 1, 2, 3], target = 1
Output: 3
Explanation: The number 1 appears 3 times in the array. */

// Appr 1 - Brute - Linear Search - O(n) & S(1)
function countOccurrencesBF(arr, n, target) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == target) count++;
  }
  return count;
}

console.log(countOccurrencesBF([0, 0, 1, 1, 1, 2, 3], 7, 1));

// Appr 2 - Optimal - Binary Search - O(logn) & S(1)
function countOccurrences(arr, n, target) {
  const [first, last] = firstLastOccurence(arr, n, target);
  // If the first index is -1, the element was not found.
  if (first === -1) {
    return 0;
  }
  // Otherwise, the count is the difference + 1.
  return last - first + 1;
}

console.log(countOccurrences([5, 5, 5, 5, 5, 5], 6, 5));
