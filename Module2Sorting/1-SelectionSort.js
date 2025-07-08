import swap from "./0-GlobalSwap.js";

function selectionSort(arr, n) {
  console.log(arr);

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i; j < n; j++) {
      if (arr[j] <= arr[minIdx]) {
        minIdx = j; // find minIdx index & not minIdx value
      }
    }
    swap(arr, i, minIdx);
    console.log(`Iteration: ${i + 1}`, arr);
  }

  return arr;
}

console.log(selectionSort([13, 46, 24, 52, 20, 9], 6));
