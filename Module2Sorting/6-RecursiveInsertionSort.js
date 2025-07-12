import swap from "./0-GlobalSwap.js";

function recInsertionSort(arr, n, i = 1, j = 1) {
  if (i == n) return arr;

  if (j > 0) {
    if (arr[j - 1] > arr[j]) {
      swap(arr, j, j - 1);
    }
    return recInsertionSort(arr, n, i, j - 1);
  }
  return recInsertionSort(arr, n, i + 1, i + 1);
}

console.log(recInsertionSort([13, 46, 24, 52, 20, 9], 6));
