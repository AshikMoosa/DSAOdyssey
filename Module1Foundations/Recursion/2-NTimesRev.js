// Write a program to print numbers from n to 0 recursively

function printNTimes(n) {
  if (n < 0) return;
  console.log(n);
  printNTimes(n - 1);
}

printNTimes(3);
