// Create a function that takes two integers as arguments.
// The first argument is a count, and the second is the starting number of a sequence that your function will create.
// The function should return an array containing the same number of elements as the count argument.
// The value of each element should be a multiple of the starting number.

// You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.

/*
Understanding the [P]roblem
===========================
Input: 2 integers

Output: array

Rules:
- arguments (count, startingNum)
-- if the count is 0, output an empty array
-- count >= 0
-- starting number can be any integer

- array length = count
- array elements are multiples of `startingNum`

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- given 2 integers, output an array of numbers that are sequenced in multiples of the starting number

sequence(5, 1);          // [1, 2, 3, 4, 5]

[1] => [1, 2]
increment count with a `for` loop
use `push` method 

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize `numArr` to an empty array
// create a sequence from the `startingNum` using a loop statement for the length of `count`
  // append current number to `numArr`
// return `numArr`

*/
function sequence(count, startingNum) {
  let numArr = [];

  for (let num = 1; num <= count; num++) {
    numArr.push(startingNum * num);
  }

  return numArr;
}

console.log(sequence(5, 1)); // [1, 2, 3, 4, 5]
console.log(sequence(4, -7)); // [-7, -14, -21, -28]
console.log(sequence(3, 0)); // [0, 0, 0]
console.log(sequence(0, 1000000)); // []
