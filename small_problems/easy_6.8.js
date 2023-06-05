// Write a function that takes a string argument containing one or more words
// and returns a new string containing the words from the string argument.
// All five-or-more letter words should have their letters in reverse order.
// The string argument will consist of only letters and spaces.
// Words will be separated by a single space.

/*
Understanding the [P]roblem
===========================
Input: string

Output: string

Rules:
- string arg (letters + spaces only)
- 5+ letter words => reversed
- words have a single space separator (' ')

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- given an input string, return a new string with the words from the input string, while reversing 5+ letter words

'Professional' => `lanoisseforP`
- string => array => reversed => join

`Walk around the block` => "Walk dnuora the kcolb"
- for words that don't reverse
// loop
  // conditional 

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// function `reverseWords`
  // declare and initialize `strArr` to an empty array
  // declare and initialize `resultarr` to an empty array
  // split input string into an array of words and assign to `strArr`
  // use a loop to iterate over `strArr`
    // use a conditional statement to check if current word is over 5 letters (pass to `over5` function)
      // if so, reverse the word (pass to `reverseWord` function) 
        // append to `resultArr`
      // else, append to `resultArr`
  // return `resultArr` joined as a string

// function `over5`
  // declare and initialize a variable `counter` to 0
  // use a loop to iterate over string arg
    // increment `counter` by 1
  // return `counter`

// function `reverseWord`
  // use a loop to iterate over string arg
    // append current letter starting from the last letter to `newStr` 
  // return `newStr`

*/

function reverseWords(str) {
  let resultArr = [];
  let strArr = str.split(' ');

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= 5) {
      resultArr.push(reverseWord(strArr[i]));
    } else {
      resultArr.push(strArr[i]);
    }
  }

  return resultArr.join(' ');
}

function reverseWord(str) {
  let resultArr = [];
  let strArr = str.split('');
  for (let i = 0; i < str.length; i++) {
    resultArr.push(strArr.pop());
  }

  return resultArr.join('');
}

console.log(reverseWords('Professional')); // "lanoisseforP"
console.log(reverseWords('Walk around the block')); // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School')); // "hcnuaL loohcS"
