/* Problem Statement: Given an array, we have to find the largest element in the array.
Examples
Example 1:
Input: arr[] = {2,5,1,3,0};
Output: 5
Explanation: 5 is the largest element in the array. 

Example2: 
Input: arr[] = {8,10,5,7,9};
Output: 10
Explanation: 10 is the largest element in the array.  */

// Appr 1 - BF - sort and print last - O(nlogn)
// Appr 2 - Optimal - keep var large and iterate and compare and store - O(n)

function largestElem(arr, n) {
  let largest = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  return largest;
}
console.log(largestElem([8, 10, 5, 7, 9], 5));
