// Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.
// You may assume that every word contains at least one letter, and that the string will always contain at least one word.
// You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

/*
Understanding the [P]roblem
===========================
Input: string

Output: string

Rules:
- output will swap first and last letters
- input contains at least one letter
- input contains at least one word
- input contains only words and spaces
- input doesn't contain leading, trailing, or repeated spaces
- output is case insensitive

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

what => thaw assign 
// `t` to `firstLetter` variable => assign `w` to `lastLetter` variable
// append variables in reverse order to `result` variable while appending other values in place

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// function `words`
// declare and initialize a variable `wordsArray` to the input string split into words in an array
// declare and initialize a variable `resultStr` 
// use a `for` loop to iterate over `wordsArray`
  // declare and initialize a variable `word` to the current value 
  // pass each `word` to the `swap` function call and assign return value to `resultStr`
// return `resultStr`

// function `swap`
// declare and initialize a variable `result` to an empty string
  // use a `for` loop to iterate over each character of the word
    // declare and initialize a `firstLetter` variable to the first value
    // declare and initialize a `lastLetter` variable to the last value
    // append `lastLetter` to `result`
    // skip to next iteration
    // append current value to `result`
    // append `firstLetter` to `result`
  // return `result`
*/

// function swap(str) {
//   let wordsArray = str.split(' ');
//   console.log(`wordsArray: ${wordsArray}`);
//   let resultStr = '';
//   for (let i = 0; i < wordsArray.length; i++) {
//     let word = wordsArray[i];
//     let firstLetter = word[0];
//     console.log(`firstLetter: ${firstLetter}`);
//     let lastLetter = word[word.length - 1];
//     console.log(`lastLetter: ${lastLetter}`);
//     resultStr += lastLetter;
//     resultStr += getChar(word);
//     resultStr += firstLetter;
//   }

//   return resultStr;
// }

// function getChar(word) {
//   let char;
//   for (let i = 0; i < word.length; i++) {
//     char = word[i];
//   }

//   return char;
// }

// split input string into words in an array
// reassign each word to the return value of passing the word to a helper function call
// return the array joined together as a string with a space in between each word

// in the helper function call, return word if it's a single letter
// otherwise, return the last letter + the letters that follow + the first letter
function swap(words) {
  let wordsArray = words.split(' ');
  for (let i = 0; i < wordsArray.length; i++) {
    wordsArray[i] = swapFirstAndLastChar(wordsArray[i]);
  }

  return wordsArray.join(' ');
}

function swapFirstAndLastChar(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

console.log(swap('Oh what a wonderful day it is')); // "hO thaw a londerfuw yad ti si"
// swap('Abcde');                          // "ebcdA"
// swap('a');                              // "a"
