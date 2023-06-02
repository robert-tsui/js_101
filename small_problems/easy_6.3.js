// Write a function that takes a positive integer as an argument
// and returns that number with its digits reversed.

/*
Understanding the [P]roblem
===========================
Input: integer

Output: integer

Rules:
- leading zeros get dropped
- integers are in reverse order

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- given an input number, reverse the order of the digits and return the digits in a new output result

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize a variable `numArr` to an empty array
// declare and initialize a variable `numStr` to an empty string
// convert the number to a string
// split the string into `numArr`
// create a loop and iterate over `numArr` starting from the last character
  // append current character to `numStr`
// return `numStr` converted back to a number 
*/

function reverseNumber(num) {
  let strArr = [];
  let numStr = '';
  strArr = num.toString().split('').reverse();

  for (let i = 0; i < strArr.length; i++) {
    numStr += strArr[i];
  }

  return Number(numStr);
}

console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(12213)); // 31221
console.log(reverseNumber(456)); // 654
console.log(reverseNumber(12000)); // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1)); // 1
