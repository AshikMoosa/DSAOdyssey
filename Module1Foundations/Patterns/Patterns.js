// *****
// *****
// *****
// *****
// *****

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    process.stdout.write("*"); // print without line break
  }
  console.log("");
}

// *
// **
// ***
// ****
// *****

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log("");
}

// 1
// 12
// 123
// 1234
// 12345

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(`${j}`); //Simply using j inside write throws errors
  }
  console.log("");
}

// 1
// 22
// 333
// 4444
// 55555

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(`${i}`);
  }
  console.log("");
}

// *****
// ****
// ***
// **
// *
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    process.stdout.write("*");
  }
  console.log("");
}

// 12345
// 1234
// 123
// 12
// 1

for (let i = 5; i > 0; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(`${j}`);
  }
  console.log("");
}
