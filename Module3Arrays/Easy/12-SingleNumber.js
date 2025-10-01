/*
Given an array of nums of n integers. Every integer in the array appears twice except one integer. Find the number that appeared once in the array.

Input : nums = [1, 2, 2, 4, 3, 1, 4]
Output : 3
Explanation : The integer 3 has appeared only once.
*/

// Appr 1 - Brute - O(n^2) & S(1)
function singleNumberBF(arr, n) {
  for (let i = 0; i < n; i++) {
    let duplicateFound = false;
    for (let j = 0; j < n; j++) {
      if (arr[i] === arr[j] && i !== j) {
        duplicateFound = true;
        break;
      }
    }
    if (!duplicateFound) return arr[i];
  }
}

console.log(singleNumberBF([5], 1));

// Appr 2 - Better - O(n) & S(n) - hashmap pattern
function singleNumberBT(arr, n) {
  // Pass 1: build frequency map
  const hashMap = new Map();
  arr.forEach((num) => {
    hashMap.set(num, (hashMap.get(num) || 0) + 1);
  });

  // Pass 2: find the key with frequency 1
  for (let [key, value] of hashMap) {
    if (value === 1) {
      return key;
    }
  }
}

console.log(singleNumberBT([1, 2, 2, 4, 3, 1, 4], 1));

//Appr 3 - Optimal - O(n) and S(1) - XOR pattern
// Start: res = 0
// res = 0 ^ 1 = 1
// res = 1 ^ 2 = 3
// res = 3 ^ 2 = 1 ← the two 2s cancel out
// res = 1 ^ 4 = 5
// res = 5 ^ 3 = 6
// res = 6 ^ 1 = 7 ← the two 1s cancel out
// res = 7 ^ 4 = 3 ← the two 4s cancel out
// Final result: 3
function singleNumber(arr, n) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    result = result ^ arr[i]; // A^A = 0, A^0 = A
  }
  return result;
}

console.log(singleNumber([1, 2, 2, 4, 3, 1, 4], 7));
