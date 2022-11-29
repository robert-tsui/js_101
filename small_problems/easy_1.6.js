/*
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
*/

/* 

INPUTS AND OUTPUTS

i: Number
o: Number

EXPLICIT REQUIREMENTS  

integer: greater than 0
sum of integers: between 1 and entered integer, inclusive

MENTAL MODEL

compute the sum or product of an integer between 1 and entered integer, inclusive

EXAMPLES/TEST CASES

validation ex 1
input: 1
sum: 1 + 1 = 2
product: 1 * 1 = 1

validation ex 2
input: 3
sum: 1 + 2 + 3
product: 1 * 2 * 3 = 6

DATA STRUCTURE/ALGORITHM

Solution #1
  
1. require readlinesync module
2. ask user to input an integer greater than 0
3. ask user to choose between summing or multiplying
4. write an if statement for each operand procedure
5. compute the sum or product of all numbers between 1 and entered integer, inclusive
6. log chosen procedural output to the user

Solution #2

1. write a helper function to compute the sum of all numbers from 1 to entered integer
2. write a helper function to compute the product of all numbers from 1 to entered integer
3. require the readlinesync module
4. ask the user to input an integer
5. ask the user to select a mode of computation
6. invoke the appropriate helper function
7. log the message with either the sum or product of all numbers from 1 to entered integer

*/

/* Solution #1


const askUser = require(`readline-sync`);

let inputInteger = parseFloat(
  askUser.question(`Please enter an integer greater than 0:\n`)
);

let inputOperand = askUser.question(
  `Enter "s" to compute the sum, or "p" to compute the product.\n`
);

if (inputOperand === `p`) {
  let product = 1;
  for (let i = 1; i <= inputInteger; i++) {
    product = product * i;
  }

  console.log(
    `The product of the integers between 1 and ${inputInteger} is ${product}`
  );
}

if (inputOperand === `s`) {
  let sum = 0;
  for (let i = 1; i <= inputInteger; i++) {
    sum = sum + i;
  }

  console.log(
    `The sum of the integers between 1 and ${inputInteger} is ${sum}.`
  );
}

*/

// Solution #2

function calculateSum(inputNum) {
  let output = 0;
  for (let i = 1; i <= inputNum; i++) {
    output += i;
  }

  return output;
}

function calculateProduct(inputNum) {
  let output = 1;
  for (let i = 1; i <= inputNum; i++) {
    output *= i;
  }

  return output;
}

let interact = require(`readline-sync`);
let getNum = parseInt(
  interact.question(`Please enter an integer greater than 0:\n`)
);
let getMode = interact.question(
  `Enter "s" to compute the sum, or "p" to compute the product.\n`
);

if (getMode === `s`) {
  let sum = calculateSum(getNum);
  console.log(`The sum of the integers between 1 and ${getNum} is ${sum}.`);
} else if (getMode === `p`) {
  let product = calculateProduct(getNum);
  console.log(
    `The product of the integers between 1 and ${getNum} is ${product}.`
  );
} else {
  console.log(`Oops, you must select an operation.`);
}
