/* 

INPUTS AND OUTPUTS

i: integer (greater than 1)
o: integer

EXPLICIT REQUIREMENTS  

- sum of all numbers between 1 and input number, inclusive
- all numbers must be multiples of 3 or 5
- integer greater than 1 

IMPLICIT REQUIREMENTS

- each number can be a multiple of 3 or 5

MENTAL MODEL
compute the sum of incrementing numbers that are divisible by 3 or 5 and return the sum

EXAMPLES/TEST CASES

validation example 1

input: 20
output: 98
sum of all numbers between 1 and 20: 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

DATA STRUCTURE/ALGORITHM

// solution #1

// declare a counter variable sum and assign a value of 0
// initialize a for loop to increment counter
  // write an if statement to check if i is divisible by 3 or 5
    // if so, add to counter variable
// return sum

// solution #2

// write a helper function to return a boolean if the number is divisble by either 3 or 5
// write a main function to compute the sum 
  // declare a counter variable sum and assign a value of 0
  // initialize a for loop to increment counter
    // write an if statement that invokes the helper function to check if i is divisible by 3 or 5
      // if so, add to counter variable
// return sum
*/

// solution #1

// function multisum(num) {
//   let sum = 0;
//   for (let i = 3; i <= num; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }

// solution #2

// function isDivisible(num) {
//   // console.log(`num: ${num}`);
//   return num % 3 === 0 || num % 5 === 0;
// }

// function multisum(maxNum) {
//   let sum = 0;
//   for (let i = 3; i <= maxNum; i++) {
//     // console.log(`i: ${i}`);
//     if (isDivisible(i) === true) {
//       sum += i;
//       // console.log(`sum: ${sum}`);
//     }
//   }

//   return sum;
// }

// solution #3

function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}

// console.log(multisum(15));
console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(10)); // 33
console.log(multisum(1000)); // 234168
