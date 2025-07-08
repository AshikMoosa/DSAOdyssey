import swap from "./0-GlobalSwap.js";

function recSelectionSort(arr, n, i = 0, j = 1, minIdx = 0) {
  // 1) If outer loop is done, return the sorted array.
  if (i >= n - 1) return arr;

  // 2) Still scanning inner loop?
  if (j < n) {
    // Update the min index if we found a smaller element
    if (arr[j] < arr[minIdx]) {
      minIdx = j;
    }
    // Recurse to the next inner index - incr j
    return recSelectionSort(arr, n, i, j + 1, minIdx);
  }

  // 3) Inner scan complete: swap the smallest into place
  swap(arr, i, minIdx);

  // 4) Move to the next outer index:
  //    - i+1 is the new position to fill
  //    - j resets to i+2 (start scanning from the element after i+1)
  //    - minIdx resets to i+1 (assume that as the smallest until proven otherwise)
  return recSelectionSort(arr, n, i + 1, i + 2, i + 1);
}

console.log(recSelectionSort([13, 46, 24, 52, 20, 9], 6));
