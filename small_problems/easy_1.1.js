// INPUTS AND OUTPUTS

// i: integer
// o: boolean

// EXPLICIT REQUIREMENTS

// integer: one integer either positive, negative, or zero
// boolean: returns true if the integer's absolute value is odd
// argument is a valid integer

// IMPLICIT REQUIREMENTS

// none

// CLARIFYING QUESTIONS

// what happens when more than one argument is passed into the function? will only the first argument be used?

// MENTAL MODEL

// compute the absolute value of an integer. Write a conditional statement to return true if the integer is odd, false if it's even.

// EXAMPLES/TEST CASES

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// DATA STRUCTURE/ALGORITHM

// 1. Compute the absolute value of the input integer and assign it to a variable num
// 2. Write a conditional statement to return false if the integer is even
// 3. Else, return true

function isOdd(integer) {
  let num = Math.abs(integer);
  if (num % 2 !== 0) {
    return true;
  } else return false;
}

console.log(isOdd(2));
console.log(isOdd(5));
console.log(isOdd(-17));
console.log(isOdd(-8));
console.log(isOdd(0));
console.log(isOdd(7));


[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
}