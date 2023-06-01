// Write a function that takes a string,
// doubles every character in the string,
// and returns the result as a new string.

/*
Understanding the [P]roblem
===========================
Input: string

Output: string

Rules:
- each character in the input string is duplicated in sequence
- new output string contains duplicates
- empty strings output empty strings


[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- duplicate each character of an input string and return the result in a new string

[D]ata Structure
================
- Do I need an array or an object for my solution? no

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize a variable `newStr` to an empty string
// create a `for` loop and iterate over input string
// for each character iteration, append the character twice to to `newStr`
// return `newStr`
*/

// function repeater(str) {
//   let newStr = '';

//   for (let i = 0; i < str.length; i++) {
//     newStr += str[i];
//     newStr += str[i];
//   }

//   return newStr;
// }

// LS solution using methods

// function repeater(str) {
//   return str
//     .split('')
//     .map((char) => char + char)
//     .join('');
// }

// LS solution using array

function repeater(str) {
  let newArr = [];

  for (let i = 0; i < str.length; i++) {
    newArr.push(str[i], str[i]);
  }

  return newArr.join('');
}

console.log(repeater('Hello')); // "HHeelllloo"
console.log(repeater('Good job!')); // "GGoooodd  jjoobb!!"
console.log(repeater('')); // ""
