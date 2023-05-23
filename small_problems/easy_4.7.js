// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size.
// For instance, the word size of "it's" is 3, not 4.

const { clean } = require('semver');

/*
Understanding the [P]roblem
===========================
Input: string

Output: object

Rules:
- string can have zero characters
- object has key value pairs where the key is the length of the string and the value is the number of strings with this length
- words consist of any sequence of letters excluding non-letters (the word size of "it's" is 3, not 4.)

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements



-- Intermission --
- Do I have a mental model? 
- Mental model: WHAT you have to do in order to get from input to output

- fiddle! => ! is a char from `a` to `z`? false

[D]ata Structure
================
- Do I need an array or an object for my solution? array and object

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// split string into characters in array
// remove all non-letters in array
// convert array to string
// split string into words in array
// iterate over array 
// if word has the value of 0, skip to next iteration
// if word length is not a property of the object, assign it a value of 0
// increment the value of object property by 1
// return object
*/

function wordSizes(words) {
  let wordsArray = words.split(' ');
  console.log(`wordsArray: ${wordsArray}`);
  let obj = {};

  for (let i = 0; i < wordsArray.length; i++) {
    let cleanWordSize = removeNonLetters(wordsArray[i].toLowerCase()).length;
    console.log(`cleanWordSize: ${cleanWordSize}`);

    if (cleanWordSize === 0) {
      continue;
    }
    if (!obj[cleanWordSize]) {
      obj[cleanWordSize] = 0;
    }
    obj[cleanWordSize] += 1;
  }

  return obj;
}

function removeNonLetters(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (isLetter(str[i])) {
      result += str[i];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= `a` && char <= `z`;
}

console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 2 }
