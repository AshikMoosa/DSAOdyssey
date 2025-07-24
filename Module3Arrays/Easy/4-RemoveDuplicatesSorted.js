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
// Appr 2 - Opt - 2 pointer tehnique - O(n)

// Appr 1 - BF - O(n^2)
function removeDuplicates(arr, n) {
  for (let i = 0; i < n; ) {
    if (arr[i] === arr[i + 1]) arr.splice(i, 1);
    else i++;
    n = arr.length;
  }
  return arr.length;
}

console.log(removeDuplicates([0, 0, 3, 3, 5, 6], 6));
