/* Given an integer array nums, rotate the array to the left by one.

Examples:
Input: nums = [1, 2, 3, 4, 5]
Output: [2, 3, 4, 5, 1]
Explanation: Initially, nums = [1, 2, 3, 4, 5]
Rotating once to left -> nums = [2, 3, 4, 5, 1]

Input: nums = [-1, 0, 3, 6]
Output: [0, 3, 6, -1]
Explanation: Initially, nums = [-1, 0, 3, 6]
Rotating once to left -> nums = [0, 3, 6, -1] */

// Appr 1 - Brute - use newArr arrayand temp var and copy elements to it - O(n) & S(n)
function rotateArrayBR(arr, n) {
  let newArr = new Array();
  let temp = arr[0];
  for (let i = 1; i < n; i++) {
    newArr.push(arr[i]);
  }
  newArr.push(temp);
  return newArr;
}

console.log(rotateArrayBR([-1, 0, 3, 6], 4));

// Appr 3 - Optimal - use temp var and loop through array - O(n) & S(1)
function rotateArray(arr, n) {
  let temp = arr[0];
  for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }
  arr[n - 1] = temp;
  return arr;
}

console.log(rotateArray([-1, 0, 3, 6], 4));
