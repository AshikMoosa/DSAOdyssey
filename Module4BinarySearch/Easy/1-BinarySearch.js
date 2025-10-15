/* Given a sorted array of integers nums with 0-based indexing, 
find the index of a specified target integer. 
If the target is found in the array, return its index. 
If the target is not found, return -1.

Examples:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: The target integer 9 exists in nums and its index is 4

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: The target integer 2 does not exist in nums so return -1 */

// Appr 1 - Optimal - O(logn) & S(1)
function binarySearch(nums, target) {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));

// Appr 2 - Recursive
function binarySearchR(nums, target, start = 0, end = nums.length - 1) {
  if (start > end) {
    return -1;
  }
  let mid = start + Math.floor((end - start) / 2);
  if (target === nums[mid]) {
    return mid;
  } else if (target < nums[mid]) {
    return binarySearchR(nums, target, start, mid - 1);
  } else {
    return binarySearchR(nums, target, mid + 1, end);
  }
}

console.log(binarySearchR([-1, 0, 3, 5, 9, 12], 9));
