/* Given an integer x, return true if x is a palindrome, and false otherwise.
Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. 
Therefore it is not a palindrome. */

var isPalindrome = function (x) {
  // BF - reverse number and compare
  // let temp = x.toString().split("").reverse().join("");
  // if (temp == x) return true;
  // else return false;

  // BS - Reverse digit and compare
  let num = Math.abs(x);
  let rev = 0;

  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return rev == x;
};

console.log(isPalindrome(-121));
