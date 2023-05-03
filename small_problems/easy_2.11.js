// Write a function that takes a non-empty string argument and returns the middle character(s) of the string.
// If the string has an odd length, you should return exactly one character.
// If the string has an even length, you should return exactly two characters.

/*
Understanding the [P]roblem
===========================
Input:
- string
Output:
- string
Rules:
- argument is non-empty string
- string is not case-sensitive
- a string with even length returns one character
- a string with odd length returns two characters
- a string with one character returns itself

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"


-- Intermission --
length: 5 
string t u r b o 
index  0 1 2 3 4
center     *

length: 7 
string t u r b o o o
index  0 1 2 3 4 5 6
center       *

length: 9
string t u r b o o o o o
index  0 1 2 3 4 5 6 7 8
center         *

length: 5 center index: (5 - 1) / 2 => 2
length: 7 center index: (7 - 1) / 2 => 3
length: 9 center index: (9 - 1) / 2 => 4

length: 2
string t u 
index  0 1
center * *

length: 4
string t u r b 
index  0 1 2 3
center   * *

length: 6
string t u r b o o
index  0 1 2 3 4 5
center     * *

length: 2 center index: right index: (2 / 2) => 1, left index: (right index - 1) 
length: 4 center index: right index: (4 / 2) => 2, left index: (right index - 1) 
length: 6 center index: right index: (6 / 2) => 3, left index: (right index - 1) 

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax

// if string length is odd
  // return substring at n-1 / 2
// if string length is even
  // return substrings at n / 2, (n / 2) - 1
*/

// function centerOf(str) {
//   let rightIndex = str.length / 2;
//   let leftIndex = rightIndex - 1;
//   let middleIndex = (str.length - 1) / 2;

//   if (str.length % 2 === 0) {
//     return str.substring(leftIndex, rightIndex + 1);
//   } else if (str.length % 2 === 1) {
//     return str.substring(middleIndex, middleIndex + 1);
//   }
// }

// ls

// function centerOf(str) {
//   if (str.length % 2 === 1) {
//     let centerIndex = (str.length - 1) / 2;
//     return str[centerIndex];
//   } else {
//     let leftIndex = str.length / 2 - 1;
//     return str.substring(leftIndex, leftIndex + 2);
//   }
// }

// student
function centerOf(str) {
  let middleIndex = (str.length - 1) / 2;

  if (str.length % 2 === 0) {
    let rightIndex = middleIndex + 1;
    return str.substring(middleIndex, rightIndex + 1);
  } else {
    return str[middleIndex];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School')); // " "
console.log(centerOf('Launch')); // "un"
console.log(centerOf('Launchschool')); // "hs"
console.log(centerOf('x')); // "x"
