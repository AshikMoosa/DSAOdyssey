/* Given two sorted arrays nums1 and nums2, 
return an array that contains the union of these two arrays. 
The elements in the union must be in ascending order.

Input: nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 7]
Output: [1, 2, 3, 4, 5, 7]
Explanation: The elements 1, 2 are common, 3, 4, 5 are from nums1 and 7 is from nums2

Input: nums1 = [3, 4, 6, 7, 9, 9], nums2 = [1, 5, 7, 8, 8]
Output: [1, 3, 4, 5, 6, 7, 8, 9]
Explanation: The element 7 is common, 3, 4, 6, 9 are from nums1 and 1, 5, 8 is from nums2 */

// Appr 1 - Brute O(n*m) & S(m + n)
function unionSortedBF(arr1, m, arr2, n) {
  let result = [];

  // 1. Process arr1, adding only unique elements
  // This is a nested loop: O(m) * O(k) = O(m^2)
  for (let i = 0; i < m; i++) {
    // .includes() is a hidden O(k) loop!
    if (!result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  // 2. Process arr2, adding only unique elements
  // This is a nested loop: O(n) * O(k) = O(n*m + n^2)
  for (let i = 0; i < n; i++) {
    // .includes() is a hidden O(k) loop!
    if (!result.includes(arr2[i])) {
      result.push(arr2[i]);
    }
  }

  // 3. Sort the final list
  // O(k log k) where k <= m+n
  result.sort((a, b) => a - b);
  return result;
}

console.log(unionSortedBF([3, 4, 6, 7, 9, 9], 6, [1, 5, 7, 8, 8], 5));
