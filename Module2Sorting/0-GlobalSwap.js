/* 
This is a simple function 2 swap 2 values in array.
We use modern destructuring syntax rather than using temp var.
Basic swap logic using temp variable is as follow:

let temp = arr[i];
arr[i] = arr[j];
arr[j] = temp; 
*/

// Function swap - Destructuring
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

export default swap;
