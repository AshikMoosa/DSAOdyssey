import swap from "../../Module2Sorting/0-GlobalSwap.js";
/* Given an integer array nums, move all the 0's to the end of the array. 
The relative order of the other elements must remain the same. 

Input: nums = [0, 1, 4, 0, 5, 2]
Output: [1, 4, 5, 2, 0, 0]
Explanation:
Both the zeroes are moved to the end and the order of the other elements stay the same

Input: nums = [0, 0, 0, 1, 3, -2]
Output: [1, 3, -2, 0, 0, 0]
*/

// Appr 1 - Brute - O(n^2) & S(1)
function moveZeroesBF(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (arr[j] !== 0) {
        swap(arr, i, j);
        break;
      }
    }
    // console.log(arr);
  }
  return arr;
}

console.log(moveZeroesBF([0, 1, 4, 0, 5, 2], 6));

// Appr 2 - Better - O(n) & S(n)
function moveZeroesBT(arr, n) {
  const temp = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]);
    }
  }
  const numOfZeroes = n - temp.length;
  temp.push(...Array(numOfZeroes).fill(0)); // Alter-Can use a simple for loop numOfZeroes times
  return temp;
}

console.log(moveZeroesBT([0, 1, 4, 0, 5, 2], 6));

// Appr 3 - Optimal - O(n) & S(1)
function moveZeroes(arr, n) {
  let i = 0;
  for (let j = i; j < n; j++) {
    if (arr[j] !== 0) {
      swap(arr, i, j);
      i++;
    }
  }
  return arr;
}

console.log(moveZeroes([0, 1, 4, 0, 5, 2], 6));
