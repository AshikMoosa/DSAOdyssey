import swap from "./0-GlobalSwap.js";

function bubbleSort(arr, n) {
  console.log(arr);

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }

    console.log(`Iteration: ${i + 1}`, arr);
    // If nothing moved, array is sorted—exit early
    if (!swapped) break;
  }
  return arr;
}

console.log(bubbleSort([13, 46, 24, 52, 20, 9], 6));
