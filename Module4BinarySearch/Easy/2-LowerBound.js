/* Given a sorted array of nums and an integer x, write a program to find the lower bound of x.
The lower bound algorithm finds the first and smallest index in a sorted array 
where the value at that index is greater than or equal to a given key i.e. x.
If no such index is found, return the size of the array.


Examples:
Input : nums= [1,2,2,3], x = 2
Output:1
Explanation: Index 1 is the smallest index such that arr[1] >= x. */

// Appr 1 - Brute - Linear Search pattern -  O(n) & S(1)
function lowerBoundBF(arr, n, x) {
  for (let i = 0; i < n; i++) {
    if (arr[i] >= x) {
      return i;
    }
  }
  return n;
}

console.log(lowerBoundBF([2, 2, 3], 3, 2));

// Appr 2 - Optimal - Binary Search pattern - O(logn) & S(1)
function lowerBound(arr, n, target) {
  let start = 0;
  let end = arr.length - 1;
  let lowerBound = n; // setting - index not found, return n length of array

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    // If the element I'm looking at is greater than or equal to my target
    if (arr[mid] >= target) {
      lowerBound = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return lowerBound;
}

console.log(lowerBound([2, 2, 3], 3, 2));
