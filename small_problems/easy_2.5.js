/*

INPUTS AND OUTPUTS

i: Number
o: Number

EXPLICIT REQUIREMENTS
- 2 input numbers
- perform 6 operations
  - addition, subtraction, product, quotient, remainder, and power
- print results of operations

CLARIFYING QUESTIONS
- what happens with negative input numbers? nothing, the built in operations will work with them.

MENTAL MODEL
- given 2 input numbers, compute the operations on those numbers

EXAMPLES/TEST CASES
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23

DATA STRUCTURE/ALGORITHM
- require readlineSync module
- declare variables to store both numbers, `first` and `second`
- prompt the user to enter the numbers
- declare a function that performs operations and prints to console

*/

const readlineSync = require(`readline-sync`);
let firstNum = Number(readlineSync.question(`==> Enter the first number:\n`));
let secondNum = Number(readlineSync.question(`==> Enter the second number:\n`));

function operations(num1, num2) {
  console.log(`==> ${num1} + ${num2} = ${num1 + num2}`);
  console.log(`==> ${num1} - ${num2} = ${num1 - num2}`);
  console.log(`==> ${num1} * ${num2} = ${num1 * num2}`);
  console.log(`==> ${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
  console.log(`==> ${num1} % ${num2} = ${num1 % num2}`);
  console.log(`==> ${num1} ** ${num2} = ${Math.pow(num1, num2)}`);
}

operations(firstNum, secondNum);
