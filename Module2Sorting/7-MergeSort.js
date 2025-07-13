function mergeSort(arr, low, high) {
  // Base case: single element or empty subarray
  if (low >= high) return arr;

  // Find midpoint (integer)
  const mid = Math.floor((low + high) / 2);

  // Sort left half
  mergeSort(arr, low, mid);
  // Sort right half
  mergeSort(arr, mid + 1, high);
  // Merge the two halves
  merge(arr, low, mid, high);

  return arr;
}

function merge(arr, low, mid, high) {
  const temp = [];
  let left = low;
  let right = mid + 1;

  // Merge elements from both halves in sorted order
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left++]);
    } else {
      temp.push(arr[right++]);
    }
  }

  // Copy any leftovers from left half
  while (left <= mid) {
    temp.push(arr[left++]);
  }
  // Copy any leftovers from right half
  while (right <= high) {
    temp.push(arr[right++]);
  }
  // Write merged segment back into original array
  for (let i = low; i <= high; i++) {
    // (i - low) goes 0, 1, 2, … up to temp.length-1
    arr[i] = temp[i - low];
  }
}

// Example usage:
const data = [13, 46, 24, 52, 20, 9];
console.log("Before:", data);

const sorted = mergeSort(data, 0, data.length - 1);
console.log("After: ", sorted);
