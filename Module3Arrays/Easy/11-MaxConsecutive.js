/* Given a binary array nums, return the maximum number of consecutive 1s in the array.
A binary array is an array that contains only 0s and 1s.

Input: nums = [1, 1, 0, 0, 1, 1, 1, 0]
Output: 3
Explanation:The maximum consecutive 1s are present from index 4 to index 6, amounting to 3 1s

Input: nums = [0, 0, 0, 0, 0, 0, 0, 0]
Output: 0
Explanation:No 1s are present in nums, thus we return 0 */

// Appr 1 - Brute - O(n^2) & S(1)
function maxConsecutiveOnesBF(arr, n) {
  let maxCount = 0;
  for (let i = 0; i < n; i++) {
    let currentCount = 0;
    if (arr[i] === 1) {
      for (let j = i; j < n; j++) {
        if (arr[j] == 1) currentCount++;
        else break;
      }
      if (currentCount >= maxCount) maxCount = currentCount;
    }
  }
  return maxCount;
}

console.log(maxConsecutiveOnesBF([1, 1, 0, 1], 4));

// Appr 2 - Optimal - O(n) & S(1) - no better solution exist
function maxConsecutiveOnes(arr, n) {
  let maxCount = 0;
  let currentCount = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      currentCount++;
    } else {
      currentCount = 0;
    }
    maxCount = Math.max(maxCount, currentCount);
  }
  return maxCount;
}

console.log(maxConsecutiveOnes([1, 1, 1], 3));
