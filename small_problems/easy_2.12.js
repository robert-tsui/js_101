// Write a function that takes a number as an argument.
// If the argument is a positive number, return the negative of that number.
// If the argument is a negative number, return it as-is.

/*
Understanding the [P]roblem
===========================
Input: 
- number

Output:
- number

Rules:
1. return negative number if argument is positive
2. return negative number if argument is negative
3. if number is not a whole number?
4. if number is 0, #1

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

-- Intermission --

5 => -5
100 => -100
-100 => -100
0 => -0

[D]ata Structure
================
- Do I need an array or an object for my solution? no

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax

// if number is greater than or equal to 0 
  // return -number
// if number is less than 0
 // return number
*/

// function negative(num) {
//   return num >= 0 ? -num : num;
// }

function negative(num) {
  return num >= 0 ? num * -1 : num;
}

console.log(negative(5)); // -5
console.log(negative(-3)); // -3
console.log(negative(0)); // -0
