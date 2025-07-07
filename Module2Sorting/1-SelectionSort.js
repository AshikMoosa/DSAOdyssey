import swap from "./0-GlobalSwap.js";

function selectionSort(arr, n) {
  console.log(arr);

  for (let i = 0; i <= n - 2; i++) {
    let min = i;
    for (let j = i; j <= n - 1; j++) {
      if (arr[j] <= arr[min]) {
        min = j; // find min index & not min value
      }
    }
    swap(arr, i, min);
    console.log(`Iteration: ${i + 1}`, arr);
  }

  return arr;
}

console.log(selectionSort([13, 46, 24, 52, 20, 9], 6));
