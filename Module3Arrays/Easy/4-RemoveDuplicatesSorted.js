/* Given an integer array nums sorted in non-decreasing order, remove all duplicates 
in-place so that each unique element appears only once. 
Return the number of unique elements in the array.

Examples:
Input: nums = [0, 0, 3, 3, 5, 6]
Output: 4
Explanation: Resulting array = [0, 3, 5, 6, _, _]
There are 4 distinct elements in nums and the elements marked as _ can have any value.

Input: nums = [-2, 2, 4, 4, 4, 4, 5, 5]
Output: 4
Explanation: Resulting array = [-2, 2, 4, 5, _, _, _, _]
There are 4 distinct elements in nums and the elements marked as _ can have any value. */

// Appr 1 - BF - one loop but splice check i+1 == i remove i check for neg numbers - O(n^2)
// Appr 2 - BS - using set since set only allows unique - O(n) but S(n)
// Appr 3 - Opt - using 2 pointer technique - O(n) S(1)

// Appr 1 - BF - O(n^2) - tricky, dont incr in loop since array size changes when splicing
function removeDuplicates(arr, n) {
  for (let i = 0; i < n; ) {
    if (arr[i] === arr[i + 1]) arr.splice(i, 1);
    else i++;
    n = arr.length;
  }
  return arr.length;
}

console.log(removeDuplicates([0, 0, 3, 3, 5, 6], 6));

// Appr2 - Using another DS Set, set wont allow duplicates
function removeDuplicatesUsingSet(arr, n) {
  const set = new Set();
  for (let i = 0; i < n; i++) {
    set.add(arr[i]);
  }

  return set.size;
}

console.log(removeDuplicatesUsingSet([0, 0, 3, 3, 5, 6], 6));

// Appr 3 - Using 2 pointer
function removeDuplicatesUsingTwoPtr(arr, n) {
  let i = 0;
  j = 0;
  while (j < n) {
    // Found unique number
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  arr.length = i + 1;
  return arr.length;
}

console.log(removeDuplicatesUsingTwoPtr([-2, 2, 4, 4, 4, 4, 5, 5], 8));
