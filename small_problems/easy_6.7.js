// Write a function that takes a string argument and returns a new string
// containing the words from the string argument in reverse order.

/*
Understanding the [P]roblem
===========================
Input: string

Output: string

Rules:
- case is left intact
- empty string returns empty string

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- given an input string, reverse the order of the words and return a new string

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize a variable `strArr` to an empty array
// split the string into an array of words, reverse the order, then join it back together as a string
// append the return value to `strArr`
// return `strArr`

*/

function reverseSentence(str) {
  let strArr = str.split(' ').reverse().join(' ');
  return strArr;
}

console.log(reverseSentence('')); // ""
console.log(reverseSentence('Hello World')); // "World Hello"
console.log(reverseSentence('Reverse these words')); // "words these Reverse"
