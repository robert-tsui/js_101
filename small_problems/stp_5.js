// Write a function that takes a string as an argument
// and returns that string with every lowercase letter changed to uppercase
// and every uppercase letter changed to lowercase.
// Leave all other characters unchanged.

/*
Understanding the [P]roblem
===========================
Input: str

Output: str

Rules:
- lowercase to uppercase
- uppercase to lowercase
- ignore other characters 

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- given a string, return the string with swapped cases for all alphabetic characters

'CamelCase' => "cAMELcASE"
'CamelCase' => ['CamelCase'] => ['C', 'a', 'm', 'e', 'l', 'C', 'a', 's', 'e'] => "cAMELcASE"

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// split the input string into an array of characters
// transform the array's characters
  // if letter is uppercase 
    // swap case
  // else if letter is lowercase
    // swap case
// join array as a string 
*/

function swapCase(str) {
  return str
    .split('')
    .map((char) => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else if (char === char.toLowerCase()) {
        return char.toUpperCase();
      } else {
        return char;
      }
    })
    .join('');
}

console.log(swapCase('CamelCase')); // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV')); // "tONIGHT ON xyz-tv"
