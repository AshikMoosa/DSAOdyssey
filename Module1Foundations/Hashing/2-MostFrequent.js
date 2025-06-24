/* Given an array of n integers, find the most frequent element in it 
if multiple appears return smallest number

Examples:
Input: arr = [1, 2, 2, 3, 3, 3]
Output: 3
Explanation: The number 3 appears the most (3 times). It is the most frequent element.

Input: arr = [4, 4, 5, 5, 6]
Output: 4
Explanation: Both 4 and 5 appear twice, but 4 is smaller. So, 4 is the most frequent element. */

function mostFreq(arr) {
  const frequency = {};
  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }
  let maxFreq = 0;
  let result = Infinity; // Start high so we can find a smaller number in tie cases.

  // Loop through the keys of the frequency object.
  for (let key in frequency) {
    let count = frequency[key];
    // Convert the key to a number because object keys are strings.
    let number = Number(key);

    // If current count is greater than maxFreq, update maxFreq and result.
    if (count > maxFreq) {
      maxFreq = count;
      result = number;
    }
    // In case of a tie, choose the smallest number.
    else if (count === maxFreq && number < result) {
      result = number;
    }
  }
  return result;
}

console.log(mostFreq([7, 4, 5, 5, 6, 6]));
