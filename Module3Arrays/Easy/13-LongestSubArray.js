/* Given an array nums of size n and an integer k, find the length of the longest sub-array that sums to k. 
If no such sub-array exists, return 0.

Input: nums = [10, 5, 2, 7, 1, 9],  k=15
Output: 4
Explanation:The longest sub-array with a sum equal to 15 is [5, 2, 7, 1], 
which has a length of 4. This sub-array starts at index 1 and ends at index 4, and 
the sum of its elements (5 + 2 + 7 + 1) equals 15. 
Therefore, the length of this sub-array is 4. */

// Appr 1 - Brute - O(n^2) & S(1)
function longestSubArrayBF(arr, n, k) {
  let longest = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum = sum + arr[j];
      if (sum === k) {
        longest = Math.max(longest, j - i + 1);
      }
    }
  }
  return longest;
}
console.log(longestSubArrayBF([10, 5, 2, 7, 1, 9], 6, 15));

// Appr 2 - Better - Hashing with prefix sum - O(n) & S(n)
function longestSubArrayBT(arr, n, k) {
  let maxLength = 0;
  let currentSum = 0;
  // Map stores: { prefixSum -> firstIndex }
  const map = new Map();

  for (let i = 0; i < n; i++) {
    // 1. Add the current element to the prefix sum
    currentSum = currentSum + arr[i];

    // 2. If the sum itself is k, the subarray starts from index 0
    if (currentSum === k) {
      maxLength = i + 1;
    }

    // 3. Check if (currentSum - k) exists in the map
    // This is the core of the algorithm
    if (map.has(currentSum - k)) {
      const length = i - map.get(currentSum - k);
      maxLength = Math.max(maxLength, length);
    }

    // 4. If the current sum is not in the map, add it.
    // We don't update it if it's already there to ensure
    // we get the longest possible subarray.
    if (!map.has(currentSum)) {
      map.set(currentSum, i);
    }
  }

  return maxLength;
}
console.log(longestSubArrayBT([10, 5, 2, 7, 1, 9], 6, 15));

// Appr 3 - Optimal - Variable Sliding Window -  O(n) & S(1)
function longestSubArrayOptimal(arr, n, k) {
  let longest = 0;
  let sum = 0;
  let i = 0; // The 'left' pointer of the window
  let j = 0; // The 'right' pointer of the window

  while (j < n) {
    // --- Step 1: Grow the window ---
    sum = sum + arr[j];

    // --- Step 2: Shrink the window if the sum is too large ---
    // This loop runs ONLY when needed.
    while (sum > k && i <= j) {
      sum = sum - arr[i];
      i++;
    }

    if (sum === k) {
      longest = Math.max(longest, j - i + 1);
    }
    j++;
  }
  return longest;
}
console.log(longestSubArrayBF([1, 15, 2], 3, 15));
