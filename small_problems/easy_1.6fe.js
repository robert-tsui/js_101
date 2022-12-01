// What if the input was an array of integers instead of just a single integer? How would your computeSum and computeProduct functions change? Given that the input is an array, how might you make use of the Array.prototype.reduce() method?

/* 

INPUTS AND OUTPUTS

i: Array (of integers)
o: Number (sum or product)

EXPLICIT REQUIREMENTS  

input array: more than 1 integer
sum of integers: between 1 and max of array, inclusive
product of integers: between 1 and max of array, inclusive

IMPLICIT REQUIREMENTS

there can be more than one integer given

MENTAL MODEL

Determine the input array and computation method from user. Then, compute either the sum or product of all numbers between 1 and max, inclusive

EXAMPLES/TEST CASES

validation ex 1
input array: [1,2,3]
max of array elements: 3
sum: 6
product: 1 * 1 = 1

DATA STRUCTURE/ALGORITHM

1. write a helper function to compute the sum of all numbers from 1 to highest entered integer
2. write a helper function to compute the product of all numbers from 1 to highest entered integer
3. require the readlinesync module
4. ask the user to input an integer
5. ask the user to select a mode of computation
6. invoke the appropriate helper function
7. log the message with either the sum or product of all numbers from 1 to entered integer

*/

function calculateSum(inputArray) {
  let total = 0;
  Array.from(inputArray);
  console.log(`getArray: ${getArray}`);
  let highestNum = inputArray.reduce((a, b) => Math.max(a, b), -Infinity);
  for (let i = 1; i <= highestNum; i++) {
    total += i;
  }

  console.log(
    `The sum of the integers between 1 and ${highestNum} is ${total}.`
  );
}

function calculateProduct(inputArray) {
  let total = 1;
  let highestNum = inputArray.reduce((a, b) => Math.max(a, b), -Infinity);
  for (let i = 1; i <= highestNum; i++) {
    total *= i;
  }

  console.log(
    `The product of the integers between 1 and ${highestNum} is ${total}.`
  );
}

let readlineSync = require(`readline-sync`);
let getArray = readlineSync.question(`Please enter an array of integers:\n`);
console.log(typeof getArray);
console.log(`getArray: ${getArray}`);
let getOperand = readlineSync.question(
  `Enter "s" to compute the sum, or "p" to compute the product between 1 and the maximum element in your array.\n`
);
if (getOperand === 's') {
  calculateSum(getArray);
} else if (getOperand === 'p') {
  calculateProduct(getArray);
} else {
  console.log(`Oops. Unknown operation.`);
}
