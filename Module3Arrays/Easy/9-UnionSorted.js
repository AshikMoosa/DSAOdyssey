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

  // Process arr1, adding only unique elements
  // This is a nested loop: O(m) * O(k) = O(m^2)
  for (let i = 0; i < m; i++) {
    // .includes() is a hidden O(k) loop!
    if (!result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  // Process arr2, adding only unique elements
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

// Appr 2 - Better - O(m+n)log(m+n) & S(m+n)
function unionSortedBT(arr1, m, arr2, n) {
  // Create a set from *both* arrays in one line
  let tempSet = new Set([...arr1, ...arr2]);

  // Convert the set to an array and sort *numerically*
  let result = [...tempSet].sort((a, b) => a - b);
  return result;
}
console.log(unionSortedBT([3, 4, 6, 7, 9, 9], 6, [1, 5, 7, 8, 8], 5));

// Appr 3 - Optimal - O(n) , S(1)
function unionSorted(arr1, m, arr2, n) {
  let result = [];
  let i = 0,
    j = 0;

  // --- Main Loop ---
  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      // Check for duplicates before adding
      if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
        result.push(arr1[i]);
      }
      i++;
    } else if (arr1[i] > arr2[j]) {
      // Check for duplicates before adding
      if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
        result.push(arr2[j]);
      }
      j++;
    } else {
      // They are equal
      // Check for duplicates before adding
      if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
        result.push(arr1[i]);
      }
      i++;
      j++;
    }
  }

  // --- Bug #2 Fix: Cleanup Loops ---

  // Add any leftover elements from arr1
  while (i < m) {
    if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
      result.push(arr1[i]);
    }
    i++;
  }

  // Add any leftover elements from arr2
  while (j < n) {
    if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
      result.push(arr2[j]);
    }
    j++;
  }

  return result;
}

console.log(unionSorted([3, 4, 6, 7, 9, 9], 6, [1, 5, 7, 8, 8], 5));
