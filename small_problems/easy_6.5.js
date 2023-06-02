// Write a function that takes a string argument
// consisting of a first name, a space, and a last name,
// and returns a new string consisting of the last name, a comma, a space, and the first name.

/*
Understanding the [P]roblem
===========================
Input: string

Output: string

Rules:
- input string is first and last name
- output string is last and first name separated by a comma

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

swapName('Joe Roberts');    // "Roberts, Joe"

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- given a first and last name, reverse the order separated by a comma and return the value

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// assign the string to a destructured array variable `firstName` and `lastName`
// return the elements in reverse order separated by a comma
*/

function swapName(str) {
  let [firstName, lastName] = str.split(' ');
  return `${lastName}, ${firstName}`;
}
console.log(swapName('Joe Roberts')); // "Roberts, Joe"
