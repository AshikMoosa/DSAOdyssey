/* Given n, calculate F(n).
Example 1:
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Example 2:
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2. */

// Time complexity - O(2^N)
var fib = function (n) {
  // if (n == 0) return 0;
  // if (n == 1) return 1;
  // bit more standardised with 1 if statement
  if (n <= 1) return n;
  else {
    return fib(n - 1) + fib(n - 2);
  }
};

// Optimised Tail Recursion - O(N)
var fib = function (n, first, second) {
  if (n == 0) return first;
  if (n == 1) return second;
  return fib(n - 1, second, first + second);
};
