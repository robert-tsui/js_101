/* 
Understanding the problem
===========================
I: String
O: String
Rules:

- return a new string
- new string contains only one character to replace consecutive characters in the sequence
- all other characters can be repeated as long as they don't have consecutive characters in sequence in the original string
- an empty string returns an empty string

Examples and Test Cases
=========================

1) Use the test cases to confirm your understanding of the problem thus far
2) Taking a look at the test cases to see if there are implied (implicit) requirements, that weren't explicitly stated in the problem statement

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

-- Intermission --

Do I have a mental model?
- use the input string as an iterable object to return a new string with the mutated characters

Mental model: WHAT you have to do in order to get from input to output

Data Structure
================

- Asking yourself: Do I need an array or object in order to hold the values that I'm working with?

Algorithm
===========

The HOW you're going to get to input from output

- A series of steps written in plain english
- Has to be specific enough to know how you're going to get from A to B
- But general enough, where you're not naming specific methods
- Indicator that you're doing it right, is that your algorithm is language agnostic

// declare a variable newStr and assign to empty string to represent the new string of mutated characters
// use a for loop to iterate over input string
  // check if the current character is strictly equal to the last character
    // if true, skip to next iteration round
  // otherwise, concatenate character to newStr
// return newStr
*/

// my solution

// function crunch(str) {
//   let newStr = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i - 1]) {
//       continue;
//     } else {
//       newStr += str[i];
//     }
//   }

//   return newStr;
// }

// LS solution

// function crunch(text) {
//   let index = 0;
//   let crunchText = '';

//   while (index <= 100) {
//     if (text[index] !== text[index + 1]) {
//       crunchText += text[index];
//       console.log(`crunchText: ${crunchText}`);
//     }

//     index += 1;
//   }

//   return crunchText;
// }

// solution #3

// let crunch = (str) => {
//   let strArr = [];
//   for (let i = 0; i < str.length; i++) {
//     let currentChar = str[i];
//     let previousChar = str[i - 1];
//     if (currentChar === previousChar) {
//       continue;
//     } else {
//       strArr.push(str[i]);
//     }
//   }

//   return strArr.join('');
// };

// solution #4

function crunch(str) {
  let areDoubles;

  do {
    areDoubles = false;

    for (let i = 0; i < str.length - 1; i += 1) {
      if (str[i] === str[i + 1]) {
        areDoubles = true;
        toReplace = str[i] + str[i];
        str = str.replace(toReplace, str[i]);
      }
      if (areDoubles) break;
    }
  } while (areDoubles);

  return str;
}

console.log(crunch('ddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunch('4444abcabccba')); // "4abcabcba" // 13 // text.length = 13 // text.length - 1 = 12
// console.log(crunch('ggggggggggggggg')); // "g"
// console.log(crunch('a')); // "a"
// console.log(crunch('')); // ""
