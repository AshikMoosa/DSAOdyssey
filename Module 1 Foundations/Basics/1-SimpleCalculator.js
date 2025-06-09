let num1 = 5;
num2 = 3;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const Choices = `Enter the option:
 1.Add
 2.Sub
 3.Multiply
 4.Divide
 `;
let choice = Number(prompt(Choices));
switch (choice) {
  case 1:
    console.log(add(num1, num2));
    break;
  case 2:
    console.log(subtract(num1, num2));
    break;
  case 3:
    console.log(multiply(num1, num2));
    break;
  case 4:
    console.log(divide(num1, num2));
    break;
  default:
    break;
}
