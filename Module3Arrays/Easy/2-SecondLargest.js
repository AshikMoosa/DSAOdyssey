/* Problem Statement: Given an array, find the second smallest and second largest element
in the array. Print ‘-1’ in the event that either of them doesn’t exist.

Example 1:
Input: [1,2,4,7,7,5]
Output: Second Smallest : 2  Second Largest : 5
Explanation: The elements are as follows 1,2,3,5,7,7 and 
hence second largest of these is 5 and second smallest is 2

Example 2:
Input: [1]
Output: Second Smallest : -1  Second Largest : -1
Explanation: Since there is only one element in the array, it is the largest and smallest element
present in the array. There is no second largest or second smallest element present.
 */

// Appr 1 - Sort and print arr[1] and arr[n-2] - 2nd and second last pos elem. - O(nlogn)
// Appr 2 - keep 2 vars
function secondLargestAndSmallest(arr, n) {
  // built in method for array max and max elem
  let largest = Math.max(...arr);
  let smallest = Math.min(...arr);
  let secLargest = -Infinity;
  let secSmallest = Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] < largest && arr[i] > secLargest) secLargest = arr[i];
    if (arr[i] > smallest && arr[i] < secSmallest) secSmallest = arr[i];
  }
  if (secLargest === -Infinity) secLargest = -1;
  if (secSmallest === Infinity) secSmallest = -1;

  return [secSmallest, secLargest];
}
console.log(secondLargestAndSmallest([8, 10, 5, 7, 9], 5));
