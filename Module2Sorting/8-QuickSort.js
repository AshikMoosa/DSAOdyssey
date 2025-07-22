import swap from "./0-GlobalSwap.js";

function quickSort(arr, low, high) {
  // Base case: single element or empty subarray
  if (low >= high) return arr;

  const pIndex = findPartitionIndex(arr, low, high);
  console.log(`Pivot at ${pIndex} (value=${arr[pIndex]}):`, arr);
  quickSort(arr, low, pIndex - 1);
  quickSort(arr, pIndex + 1, high);
  return arr;
}

function findPartitionIndex(arr, low, high) {
  const pivotVal = arr[low]; // pivot value
  let i = low;
  let j = high;
  while (i < j) {
    // move i right until we find something > pivotVal
    // checking indexes first before comparing array values so we never read past the slice.
    while (i <= high && arr[i] <= pivotVal) {
      i++;
    }
    // move j left until we find something < pivotVal
    while (j >= low && arr[j] > pivotVal) {
      j--;
    }
    if (i < j) {
      swap(arr, i, j);
    }
  }

  // put pivot into its final place at j
  swap(arr, low, j);
  return j;
}

// Example usage:
const data = [13, 46, 24, 52, 20, 9];
console.log("Before:", data);

const sorted = quickSort(data, 0, data.length - 1);
console.log("After: ", sorted);
