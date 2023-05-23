// Write a function that takes a string consisting of zero or more space separated words
// and returns an object that shows the number of words of different sizes.
// Words consist of any sequence of non-space characters.

/*
Understanding the [P]roblem
===========================
Input: string

Output: object

Rules:

- input string can have zero spaces between words or zero words
- object contains key value pairs
 - key holds the number of characters in the word
 - value holds the number of times the word length appears in the input string
- words contain letters or other characters, just not spaces

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}


-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- `four` => 4 (count characters excluding spaces)
- `four` => 1 (loop through words in array to increment counter)
- `four` => { "4": 1 } (create an object)

[D]ata Structure
================
- Do I need an array or an object for my solution? array and object

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize a variable "arr" and assign to input string split into words in array
// declare and initialize a variable "resultObj" and assign to empty object
// use a `for` loop to iterate over array
  // add the length of each word as a key to `resultObj`
  // use a conditional statement to check how many words in array match the key
    // add the count as a value to `resultObj`
// return `resultObj`
*/

function wordSizes(str) {
  let arr = str.split(' ');
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let wordSize = arr[i].length;
    if (wordSize === 0) {
      continue;
    }
    if (!obj[wordSize]) {
      obj[wordSize] = 0;
    }
    obj[wordSize] += 1;
  }

  return obj;
}

console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes('')); // {}
