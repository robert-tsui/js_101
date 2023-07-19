/*

Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

*/

// wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

/*
Understanding the [P]roblem
===========================
Input: string

Output: string

Rules:
- convert all "number words" to their corresponding digit characters
- return the string with digit characters

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements


-- Intermission --
`five` => numberWord.includes(word) => sentence.replace('five', '5')

Given a sentence with number words, replace all number words with corresponding digit characters and return the sentence

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize a constant variable `numberWords` to an array of number words
// declare a variable `words` and initialize to the result of splitting input string into an array of elements
// iterate over `words` 
  // check if `numberWords` matches the current word in the sentence
    // if so, replace the number word with the corresponding digit character
// return string
*/

// using regex

// const NUMBER_WORDS = {
//   zero: '0',
//   one: '1',
//   two: '2',
//   three: '3',
//   four: '4',
//   five: '5',
//   six: '6',
//   seven: '7',
//   eight: '8',
//   nine: '9',
// };

// function wordToDigit(string) {
//   let regex = /one|two|three|four|five|six|seven|eight|nine/g;
//   return string.replace(regex, numberWordSwap);
// }

// function numberWordSwap(match) {
//   return NUMBER_WORDS[match];
// }

// using transformation

// const NUMBER_WORDS = {
//   zero: '0',
//   one: '1',
//   two: '2',
//   three: '3',
//   four: '4',
//   five: '5',
//   six: '6',
//   seven: '7',
//   eight: '8',
//   nine: '9',
// };

// function wordToDigit(string) {
//   console.log(string.split(/[\w]/g));
//   return string
//     .split(' ')
//     .map((word) => {
//       if (word in NUMBER_WORDS) {
//         return NUMBER_WORDS[word];
//       } else {
//         return word;
//       }
//     })
//     .join(' ');
// }

// student submitted

// const wordToDigit = (str) => {
//   const match = [
//     'zero',
//     'one',
//     'two',
//     'three',
//     'four',
//     'five',
//     'six',
//     'seven',
//     'eight',
//     'nine',
//   ];

//   let sentences = str.split('.');

//   sentences = sentences.map((sentence) => {
//     return sentence
//       .split(' ')
//       .map((word) => (match.indexOf(word) >= 0 ? match.indexOf(word) : word))
//       .join(' ');
//   });

//   return sentences.join('.');
// };

// console.log(
//   wordToDigit('Please call me at five five five one two three four. Thanks.')
// "Please call me at 5 5 5 1 2 3 4. Thanks."
