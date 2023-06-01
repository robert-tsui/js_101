// Write a function that takes a string,
// doubles every consonant character in the string,
// and returns the result as a new string.
// The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

/*
Understanding the [P]roblem
===========================
Input: string

Output: string

Rules:
- only consonants are doubled
- do not double
-- vowels ('a','e','i','o','u')
-- digits (1, 2)
-- punctuation (`!`, `.`)
-- whitespace (' ')


[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- given an input string, double consonants only and return as a new string

[D]ata Structure
================
- Do I need an array or an object for my solution? yes

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize a variable `stringArr` to an empty array
// declare and initialize a variable `consonantArr` to all consonant values in alphabet
// loop over input string 
  // create a conditional statement to check if `consonantArr` includes current character
    // if so, append the current character twice to `stringArr` 
    // else, append the current character once to `stringArr`

// return `stringArr` joined back together as a string
*/

function doubleConsonants(str) {
  let consonantArr = [
    'B',
    'C',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'M',
    'N',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  let stringArr = [];

  for (let i = 0; i < str.length; i++) {
    let upperCased = str[i].toUpperCase();
    if (consonantArr.includes(upperCased)) {
      stringArr.push(str[i], str[i]);
    } else {
      stringArr.push(str[i]);
    }
  }

  return stringArr.join('');
}

console.log(doubleConsonants('String')); // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th')); // "JJullyy 4tthh"
console.log(doubleConsonants('')); // ""
