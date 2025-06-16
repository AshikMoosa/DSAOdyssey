/* You are given an integer n. You need to check whether it is an armstrong number or not. 
Return true if it is an armstrong number, otherwise return false.
An armstrong number is a number which is equal to the sum of the digits of the number, 
raised to the power of the number of digits.

Examples:
Input: n = 153
Output: true
Explanation: Number of digits : 3.
1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153.
Therefore, it is an Armstrong number. */

function isArmstrong(n) {
  let digits = countDigit(n);
  let num = Math.abs(n);
  let result = 0;
  // Extract digits
  while (num > 0) {
    let digit = num % 10;
    result = result + Math.pow(digit, digits);
    num = Math.floor(num / 10);
  }
  return result == n ? true : false;
}

function countDigit(n) {
  if (n === 0) return 1;
  else return Math.floor(Math.log10(n)) + 1;
}
console.log(isArmstrong(370));
