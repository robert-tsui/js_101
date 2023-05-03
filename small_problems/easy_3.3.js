// Write a function that takes one argument, a positive integer,
// and returns a string of alternating '1's and '0's, always starting with a '1'.
// The length of the string should match the given integer.

// Prompt

/*
Understanding the [P]roblem
===========================
Input: positive integer

Output: string of numbers

Rules:
- returned string length should `===` input integer
- returned string always starts with `1`
- returned string alternates between `1` and `0`
- input is a positive integer

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"


-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

[1, 0] => 1, 0 => 10

[D]ata Structure
================
- Do I need an array or an object for my solution?
- array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// assign variable to an array with the integers `1` and `0`
// iterate over array an `input` number of times 
// return string
*/

function stringy(n) {
  let str = '';

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      str += `1`;
    } else {
      str += '0';
    }
  }

  return str;
}

console.log(stringy(5));
