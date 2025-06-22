/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
and removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome. */

// Medium Problem
var isPalindrome = function (s) {
  let newStr = removeNonAlphanumeric(s);
  // built in js method for reverse a string
  // let revStr = newStr.split("").reverse().join("");
  let revStr = reverseString(newStr);
  if (newStr === revStr) return true;
  else return false;
};

// Recursive function for reversing string
function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.substring(1)) + str.charAt(0);
}

function removeNonAlphanumeric(s) {
  // remove non-alphanum and convert to lowercase
  return s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
}
