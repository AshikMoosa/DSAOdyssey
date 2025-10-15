/* Given a sorted array of nums consisting of distinct integers and a target value, 
return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

Examples:
Input: nums = [1, 3, 5, 6], target = 5
Output: 2
Explanation: The target value 5 is found at index 2 in the sorted array. 
Hence, the function returns 2.

Input: nums = [1, 3, 5, 6], target = 2
Output: 1
Explanation: The target value 2 is not found in the array. 
However, it should be inserted at index 1 to maintain the sorted order of the array. */

// Appr 1 - Brute - O(n) & S(1)
function searchInsertPositionBF(arr, n, target) {
  for (let i = 0; i < n; i++) {
    if (arr[i] === target) return i;
    if (arr[i] > target) return i;
  }
  return n;
}

console.log(searchInsertPositionBF([1, 3, 5, 6], 4, 2));

// Appr 2 - Optimal - Binary Search - O(logn) & S(1)
function searchInsertPosition(arr, n, target) {
  let start = 0;
  let end = arr.length - 1;
  let position = n;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] >= target) {
      position = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return position;
}

console.log(searchInsertPosition([1, 3, 5, 6], 4, 5));
