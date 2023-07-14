// Write a function that takes a string as an argument
// and returns that string with a staggered capitalization scheme.
// Every other character, starting from the first,
// should be capitalized and should be followed by a lowercase or non-alphabetic character.
// Non-alphabetic characters should not be changed,
// but should be counted as characters for determining when to switch between upper and lower case.

/*
Understanding the [P]roblem
===========================
Input: string

Output: string

Rules:
- what is a staggered capitalization scheme?
- every even index starting from index 0 should be capitalized
- every odd index should have a lowercase or non-alphabetic character
- ignore non-alphabetic characters but use them as character counts for when to switch between uppercase and lowercase

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

// given a string, return the string with staggered capitalization

'I Love Launch School!' => "I LoVe lAuNcH ScHoOl!"
'I Love Launch School!' => ['I Love Launch School!'] => ["I LoVe lAuNcH ScHoOl!"] => "I LoVe lAuNcH ScHoOl!"

[D]ata Structure
================
- Do I need an array or an object for my solution?

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// split the string into an array of characters
// transform the array
  // if index is even
    // convert case to uppercase
// join array as string
*/

function staggeredCase(str) {
  return str
    .split('')
    .map((char, i) => {
      if (i % 2 === 0) {
        return char.toUpperCase();
      } else if (i % 2 === 1) {
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join('');
}

console.log(staggeredCase('I Love Launch School!')); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS')); // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers')); // "IgNoRe 77 ThE 4444 nUmBeRs"
