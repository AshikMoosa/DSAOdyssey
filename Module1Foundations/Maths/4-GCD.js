/* Given two integers N1 and N2, find their greatest common divisor.
The Greatest Common Divisor of any two integers is the largest number that divides both integers.

Example 1:
Input:N1 = 9, N2 = 12
Output:3
Explanation:Factors of 9: 1, 3 and 9
Factors of 12: 1, 2, 3, 4, 6, 12
Common Factors: 1, 3 out of which 3 is the greatest hence it is the GCD. */

function gcd(n1, n2) {
  n1 = Math.abs(n1);
  n2 = Math.abs(n2);
  let gcd = 1;
  // BF - loop till min and check whether both num divides it by i
  // let min = Math.min(n1, n2);
  // for (let i = 1; i <= min; i++) {
  //   if (n1 % i == 0 && n2 % i == 0) {
  //     gcd = i;
  //   }
  // }
  // return gcd;

  // Optimal Time Complexity: O(min(n1, n2) - same but loop decrements
  // let min = Math.min(n1, n2);
  // for (let i = min; i >= 1; i--) {
  //   if (n1 % i == 0 && n2 % i == 0) {
  //     return i;
  //   }
  // }
  // return 1;

  // Best solution Euclean algo - Time Complexity: O(log(min(a, b)))
  while (n2 !== 0) {
    let temp = n2;
    n2 = n1 % n2;
    n1 = temp;
  }
  return n1;
}

console.log(gcd(20, 15));
