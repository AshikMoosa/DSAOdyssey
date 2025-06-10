/* You are given an integer n. You need to return the number of digits in the number.
The number will have no leading zeroes, except when the number is 0 itself.

Examples:
Input: n = 4
Output: 1
Explanation: There is only 1 digit in 4.

Input: n = 14
Output: 2
Explanation: There are 2 digits in 14. */

let n = 1234567;
function countDigit(n) {
  // Solution 1 BruteForce
  // console.log(n.toString().length);

  // Solution 2 Optimal
  // let count = 0;
  // let temp = n;
  // while (temp > 0) {
  //   count++;
  //   temp = Math.floor(temp / 10);
  // }
  // console.log(count);

  // Solution 3 Best
  if (n === 0) return 1; // log wont handle zero case
  console.log(Math.floor(Math.log10(n)) + 1);
}
countDigit(n);
