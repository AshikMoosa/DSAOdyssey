/* Write a program for printing 3 inch scale 
---0
-
--
-
---1
-
--
-
---2
-
--
-
---3 */

// function threeInchRuler() {
//   const tickLen = 3;
//   const numInches = 3;
//   for (let i = 0; i <= numInches; i++) {
//     // major tick print
//     console.log("-".repeat(tickLen) + i);

//     // minot tick print
//     if (i < numInches) {
//       console.log("-");
//       console.log("--");
//       console.log("-");
//     }
//   }
// }
// threeInchRuler();

// BF
function threeInchRulerRecur(n, i) {
  if (n < 0) return;
  console.log("---" + i);
  if (i != 3) {
    console.log("-");
    console.log("--");
    console.log("-");
  }
  return threeInchRulerRecur(n - 1, i + 1);
}
threeInchRulerRecur(3, 0);

// optimised
// Recursive helper to print the minor ticks pattern
function printMinorTicks(levels) {
  // Base case: if no more minor ticks to print, return.
  if (levels === 0) return;
  // Print the appropriate minor tick based on 'levels'
  // For our pattern, we assume the ticks in order [ "-", "--", "-" ]
  // We can define an array representing our minor pattern.
  const ticksPattern = ["-", "--", "-"];

  // Calculate the index from the number of levels remaining.
  // For 3 minor ticks, when levels is 3, we print the first one; when 2, the second, etc.
  console.log(ticksPattern[ticksPattern.length - levels]);

  // Recursively print the remaining minor ticks.
  printMinorTicks(levels - 1);
}

// Recursive function to print the major ticks (inch marks) and invoke minor ticks.
function printRulerRecur(current, total) {
  // Base case: if current inch is greater than total, stop recursion.
  if (current > total) return;

  // Print the major tick with the inch number.
  console.log("---" + current);

  // Between inches, print the minor tick pattern (only if not on the last inch)
  if (current < total) {
    // Here, 3 indicates we want a pattern of 3 minor ticks.
    printMinorTicks(3);
  }

  // Recursive call for the next inch.
  printRulerRecur(current + 1, total);
}

// Start with inch 0 up to inch 3.
printRulerRecur(0, 3);
