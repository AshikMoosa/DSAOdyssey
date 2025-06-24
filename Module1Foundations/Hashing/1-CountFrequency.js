/* Given an array, we have found the number of occurrences of each element in the array.

Examples:

Example 1:
Input: arr[] = {10,5,10,15,10,5};
max num is 15
Output: 10  3
	      5  2
        15  1
Explanation: 10 occurs 3 times in the array
	            5 occurs 2 times in the array
              15 occurs 1 time in the array
 */

// function countFreq(arr, max) {
//   let n = arr.length;

//   let hashArray = Array(max + 1).fill(0);
//   for (let i = 0; i < n; i++) {
//     hashArray[arr[i]]++;
//   }
//   return hashArray;
// }

// console.log(countFreq([10, 5, 10, 15, 10, 5], 15));

// Far efficient with HashObject/Table
function countFrequencies(arr) {
  const frequency = {}; // This object acts as our hash table.

  for (let num of arr) {
    // If the number already exists as a key, increment its count.
    // Otherwise, initialize it with 1.
    frequency[num] = (frequency[num] || 0) + 1;
  }

  return frequency;
}

const arr = [100, 5000000000, 100, 42, 42];
console.log(countFrequencies(arr));
// Expected output: { '42': 2, '100': 2, '5000000000': 1 }
