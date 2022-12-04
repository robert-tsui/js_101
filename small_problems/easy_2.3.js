/* 

INPUTS AND OUTPUTS

i: Number, Number
o: Number

EXPLICIT REQUIREMENTS  
- inputs are 2 numbers
- output is evaluated result of multiplying the inputs

IMPLICIT REQUIREMENTS

CLARIFYING QUESTIONS  
- what if a nubmer is a floating decimal? the calculation doesn't change 

MENTAL MODEL
Given 2 numbers, multiply them together and return the result

EXAMPLES/TEST CASES

validation example 1
i: 5, 3
o: 15

console.log(multiply(5, 3) === 15); // logs true

DATA STRUCTURE/ALGORITHM

// multiply two arguments
// return result

*/

// solution #1

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// console.log(multiply(5, 3));

// solution #2

const multiply = (num1, num2) => num1 * num2;

console.log(multiply(3, 5));
