// Given a string that consists of some words and an assortment of non-alphabetic characters,
// write a function that returns that string with all of the non-alphabetic characters replaced by spaces.
// If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

const { clean } = require('semver');

/*
Understanding the [P]roblem
===========================
Input: string

Output: string

Rules:
- input string contains both alphabetic and non-alphabetic characters
- output string contains non-alphabetic characters replaced by spaces
- one space replaces consecutive non-alphabetic characters
- a space is non-alphabetic and is replaced by a space

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

cleanUp("---what's my +*& line?");    // " what s my line "

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- return a string by replacing the non-alphabetic characters with spaces from the input string

non-alphabetic characters: (-, +, *, &, ~, `, !, @, #, $, %, ^, (, ), _, =, \, |, [, ], {, }, :, ;, ', ", <, >, ,, ., ?, /)

regex: [^a-zA-Z\d\s:]


[D]ata Structure
================
- Do I need an array or an object for my solution?
- array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize a ref array `nonAlpha` to a list of non-alphabetic characters
// declare and initialize a variable `newStr` to an empty string
// write a for loop to iterate over input string
  // append string to empty array `arr`
  // write a conditional statement to check if current character of input string matches any character from array
    // if so, replace current character with a space
    // if next character matches any character from array, replace with empty space and continue
  // convert the array to string and reassign to `newStr`
// return `newStr`
*/

// attempt 1
function cleanUp(str) {
  let nonAlpha = [`-`, `+`, `*`, `&`, `~`, "'", '?'];
  let newStr;
  let newArr1 = [];
  let strCopy = str.split('');
  for (let i = 0; i < strCopy.length; i++) {
    let currChar = strCopy[i];

    if (nonAlpha.includes(currChar) && newArr1[newArr1.length - 1] !== ' ') {
      newArr1.push(' ');
    } else {
      newArr1.push(currChar);
    }
  }

  newStr = newArr1.join('');
  return newStr;
}

// LS solution attempt

function cleanUp(str) {
  let cleanText = '';
  for (let i = 0; i < str.length; i++) {
    if (isLowerCase(str[i]) || isUpperCase(str[i])) {
      cleanText += str[i];
    } else if (i === 0 || cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function isLowerCase(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCase(char) {
  return char >= 'A' && char <= 'Z';
}
console.log(cleanUp("---what's my +*& line?")); // " what s my line "
