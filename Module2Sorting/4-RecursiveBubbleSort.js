import swap from "./0-GlobalSwap.js";

function recBubbleSort(arr, n, i = 0, j = 0, swapped = false) {
  if (i == n - 1) return arr;

  if (j < n - i - 1) {
    if (arr[j] > arr[j + 1]) {
      swap(arr, j, j + 1);
      swapped = true;
    }
    return recBubbleSort(arr, n, i, j + 1, swapped);
  }
  if (!swapped) return arr;
  return recBubbleSort(arr, n, i + 1, 0, false);
}

console.log(recBubbleSort([13, 46, 24, 52, 20, 9], 6));
