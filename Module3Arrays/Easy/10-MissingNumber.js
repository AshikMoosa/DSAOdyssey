/* Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.


Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
2 is the missing number in the range since it does not appear in nums.
 */

// Appr 1 - Brute - O(n^2) & S(1)
function missingNumberBF(nums) {
  let n = nums.length;
  // 1. Loop through every number we *expect* to see (0 to n)
  for (let i = 0; i <= n; i++) {
    let found = false; // Reset the flag *before* each new search
    // 2. Search the *entire* input array for that number
    // (Note: loop should be j < n, not j <= n)
    for (let j = 0; j < n; j++) {
      if (nums[j] === i) {
        found = true;
        break; // Found it, stop this inner loop
      }
    }
    // 3. If, after the *entire* inner loop, we never found it...
    if (!found) {
      return i; // That's the missing number
    }
  }
}
console.log(missingNumberBF([0, 1, 3]));

// Appr 2 - Better - O(nlogn) & S(1) or S(logn)
var missingNumberBT = function (nums) {
  let n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= n; i++) {
    if (nums[i] !== i) return i;
  }
};

console.log(missingNumberBT([0, 1, 3]));

// Appr 3 - Optimal - 1 - Hashing pattern - O(n) & S(n)
function missingNumber1(nums) {
  let n = nums.length;
  let hashArray = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    hashArray[nums[i]]++;
  }
  return hashArray.indexOf(0);
}

console.log(missingNumber1([0, 1, 3]));

// Appr 3 - Optimal - 2 - Math Pattern - Gauss Summation - O(n) & S(1)
function missingNumber2(nums) {
  let n = nums.length;
  let expected = (n * (n + 1)) / 2; // sum of n numbers
  let actual = 0;
  for (let i = 0; i < n; i++) {
    actual += nums[i]; // sum of all numbers of nums array
  }
  return expected - actual; // missing number is difference
}

console.log(missingNumber2([0, 1, 3]));

// Appr 3 - Optimal - Bitwise XOR pattern - O(n) & S(1)
function missingNumber3(nums) {
  let n = nums.length;
  let missing = n;
  for (let i = 0; i < n; i++) {
    missing = missing ^ i ^ nums[i]; // A^A = 0, A^0 = A
  }
  return missing;
}

console.log(missingNumber3([0, 1, 3]));
