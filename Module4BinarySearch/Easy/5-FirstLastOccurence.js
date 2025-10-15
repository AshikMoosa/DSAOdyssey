import lowerBound from "./2-LowerBound.js";
import upperBound from "./3-UpperBound.js";
/* Given an array of integers nums sorted in non-decreasing order, 
find the starting and ending position of a given target value. 
If the target is not found in the array, return [-1, -1].


Examples:
Input: nums = [5, 7, 7, 8, 8, 10], target = 8
Output: [3, 4]
Explanation:The target is 8, and it appears in the array at indices 3 and 4, 
so the output is [3,4] */

// Appr 1 - Brute - Linear Search - O(n) & S(1)
function firstLastOccurenceBF(arr, n, target) {
  let first = -1;
  let last = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] == target) {
      if (first < 0) first = i;
      last = i;
    }
  }
  return [first, last];
}
console.log(firstLastOccurenceBF([5, 7, 7, 8, 8, 10], 6, 8));

// Appr 2 - Optimal - Binary Search - O(logn)  & S(1)
// Uses 2 passes - 1 pass find lowerbound and 2nd pass find upperbound
function firstLastOccurence(arr, n, target) {
  // 1. Find the first occurrence using the lowerBound logic.
  const first = lowerBound(arr, n, target);

  // 2. Check if the target was found at all.
  // If lowerBound is at the end OR the element isn't the target, it's not in the array.
  if (first === n || arr[first] !== target) {
    return [-1, -1];
  }

  // 3. Find the upper bound to determine the end of the sequence.
  const upper = upperBound(arr, n, target);

  // 4. The last occurrence is the index right before the upper bound.
  const last = upper - 1;

  return [first, last];
}
console.log(firstLastOccurence([5, 7, 7, 8, 8, 10], 6, 8));
