// Write a function that takes one argument, a positive integer,
// and returns the sum of its digits.
// Do this without using for, while, or do...while loops
// - instead, use a series of method calls to perform the sum.

/*
Understanding the [P]roblem
===========================
Input: number

Output: number

Rules:
- do not use loop statements
- use methods only


[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- given a positive integer, return the sum of its digits using method calls, no loops.

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize a variable `numArr` to the return value of converting the input integer to a string and splitting the string into `numArr` separated by digits
// use a method call to reduce the digits to a sum and assign to a variable `result`
// return `result` 
*/

function sum(integer) {
  let numArr = integer.toString().split('');
  let resultArr = numArr.map((str) => {
    return Number(str);
  });
  let sum = resultArr.reduce((acc, cv) => {
    return acc + cv;
  });

  return sum;
}

console.log(sum(23)); // 5
console.log(sum(496)); // 19
console.log(sum(123456789)); // 45
