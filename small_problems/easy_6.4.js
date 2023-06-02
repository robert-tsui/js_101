// Write a function that takes an integer argument
// and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

// You may assume that the argument will always be a positive integer.

/*
Understanding the [P]roblem
===========================
Input: integer

Output: array

Rules:
- output array's first element always starts with `1`
- output array's last element always eneds with the argument 
- output array's elements are in ascending order

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- given an input integer, return an array with elements starting from `1` to the input integer (inclusive)

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize a variable `numArr` to an empty array
// declare and initialize a variable `incrementer` to the number `1`
// create a loop and increment the `incrementer` by 1 for the length of the argument
  // append the current string character converted to a number to `numArr`
// return `numArr`
*/

function sequence(num) {
  let numArr = [];
  let incrementer = 1;

  while (true) {
    numArr.push(Number(incrementer));
    incrementer++;
    if (incrementer > num) break;
  }

  return numArr;
}

console.log(sequence(5)); // [1, 2, 3, 4, 5]
console.log(sequence(3)); // [1, 2, 3]
console.log(sequence(1)); // [1]
