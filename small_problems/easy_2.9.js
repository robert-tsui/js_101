// Build a program that randomly generates Teddy's age,
// and logs it to the console.
// Have the age be a random number between 20 and 120 (inclusive).

/*
Understanding the [P]roblem
===========================
Input: 
- none

Output: 
- Number

Rules:
- age must be between 20 and 120 (inclusive)
- age must be an integer?

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

- Teddy is 69 years old!


-- Intermission --

[D]ata Structure
================
- Do I need an array or an object for my solution?

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax

- generate a random number between 0 and 1
- multiply the floating point number by the range of possible values between the min and max of the age range
- round this number down to the nearest integer
- add this number to the min of the age range to shift the number into the range 
- assign return value to a variable `age`
- return age

*/
function findAge(min, max) {
  let age = Math.floor(Math.random() * (max - min)) + min;

  return age;
}

let teddysAge = findAge(20, 120);

console.log(`Teddy's age is ${teddysAge} years old!`);
