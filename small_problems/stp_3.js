// Write a function that takes a string and returns an object containing three properties:
// one representing the number of characters in the string that are lowercase letters,
// one representing the number of characters that are uppercase letters,
// and one representing the number of characters that are neither.

/*
Understanding the [P]roblem
===========================
Input: string

Output: object (3 properties)

Rules:
- property 1: # of lowercase chars in str
- property 2: # of uppercase chars in str
- property 3: # of chars that are neither
- numeric characters will need to be converted from strings to numbers if checking their UTF-16 code units

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

'abCdef 123' => { lowercase: 5, uppercase: 1, neither: 4 }
'abCdef 123' => ['a', 'b', 'C', 'd', 'e', 'f', ' ', 1, 2, 3] => { lowercase: 5, uppercase: 1, neither: 4 }

given a string, return an object providing counts for lowercase, uppercase, and neither

[D]ata Structure
================
- Do I need an array or an object for my solution? object

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare a variable `resultObj` and initialize to an object with properties containing counts intialized to 0
// declare a variable `chars` and initialize to the input string split into an array of characters
// loop over array of characters
// declare a variable `char` and initialize to current character
// check if `char` is lowercase
  // if so, add property and count value to `resultObj`
// check if `char` is uppercase
  // if so, add property and count value to `resultObj`
// otherwise if neither
  // add property and count value to `resultObj`
// return `resultObj`
*/
function letterCaseCount(str) {
  // declare a variable `resultObj` and initialize to an empty object
  let resultObj = { lowercase: 0, uppercase: 0, neither: 0 };
  // declare a variable `chars` and initialize to the input string split into an array of characters
  let chars = str.split('');
  // loop over array of characters
  for (let i = 0; i < chars.length; i++) {
    let char = chars[i];
    if (char >= 'a' && char <= 'z') {
      resultObj.lowercase += 1;
    } else if (char >= 'A' && char <= 'Z') {
      resultObj.uppercase += 1;
    } else {
      resultObj.neither += 1;
    }
  }

  // return `resultObj`
  return resultObj;
}

console.log(letterCaseCount('abCdef 123')); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef')); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123')); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount('')); // { lowercase: 0, uppercase: 0, neither: 0 }
