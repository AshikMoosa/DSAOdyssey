// Write a program to print numbers from 0 to n recursively

function printNTimes(n) {
  if (n < 0) return;
  printNTimes(n - 1);
  console.log(n);
}

printNTimes(3);
