import swap from "./0-GlobalSwap.js";

function insertionSort(arr, n) {
  console.log(arr);

  for (let i = 0; i < n; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        swap(arr, j, j - 1);
      }
    }

    console.log(`Iteration: ${i + 1}`, arr);
  }
  return arr;
}

console.log(insertionSort([13, 46, 24, 52, 20, 9], 6));
