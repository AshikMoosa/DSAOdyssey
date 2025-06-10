/* Given a signed 32-bit integer x, return x with its digits reversed.
Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
 */
var reverse = function (x) {
  // Solution 1 - BF - using int->str->int
  // let str = String(x);
  // Check for a negative sign.
  // if (str[0] === "-") {
  //   // Remove the negative sign, reverse, then reattach.
  //   return parseInt("-" + str.slice(1).split("").reverse().join(""));
  // } else {
  //   // Reverse the string and convert back.
  //   return parseInt(str.split("").reverse().join(""));
  // }

  // Solution 2 - Optimal & Best - extracting digits
  let sign = x < 0 ? -1 : 1;
  let num = Math.abs(x);
  let rev = 0;

  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return rev * sign;
};

console.log(reverse(-123));
