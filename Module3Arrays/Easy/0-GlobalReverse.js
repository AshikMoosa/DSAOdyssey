/* This is a simple function to reverse an array using destructuring

the normal flow will be:

let temp = arr[left];
arr[left] = arr[right];
arr[right] = temp; 
*/

function reverseArr(arr, left = 0, right = arr.length - 1) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]; // replace this with normal flow for simplicity
    left++;
    right--;
  }
  return arr;
}

// console.log(reverseArr([1, 2, 3, 4], 0, 1));
export default reverseArr;
