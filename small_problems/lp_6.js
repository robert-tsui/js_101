// Write a function that returns a list of all palindromic substrings of a string.
// That is, each substring must consist of a sequence of characters that reads the same forward and backward.
// The substrings in the returned list should be sorted by their order of appearance in the input string.
// Duplicate substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous exercise.

// For the purpose of this exercise, you should consider all characters and pay attention to case;
// that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not.
// In addition, assume that single characters are not palindromes.

/*
Understanding the [P]roblem
===========================
Input: string

Output: array

Rules:
- if there's a duplicate substring, include it
- substrings should come in the order they appear in the original string
- a palindromic substring is a sequence of characters that reads the same forward and backward
- case sensitive

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- given an input string, return an ordered list of palindromic substrings

palindromes('madam'); // [ "madam", "ada" ]

input => `madam`
1. get the leading substring // ['a', 'd', 'a', 'm']
2. get the trailing substring // [`a`, `ad`, `ada`, `adam`]
3. compare trailing substring with reversed trailing substring // `ada` === `ada`, `ad` !== `da`

[D]ata Structure
================
- Do I need an array or an object for my solution?

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

palindromes('madam'); // [ "madam", "ada" ]
1. get the leading substring // ['a', 'd', 'a', 'm']

// declare and initialize a variable `substrings` to an empty array
// loop over input string
  // declare and initialize a variable `substring`
  // assign `substring` to the substring extracted from the current index of the string to the end of the length of the string
  // reassign the `substrings` array to calling the second function passing in `substring`
// return `substrings` array 

2. get the trailing substring // [`a`, `ad`, `ada`, `adam`]

// declare and initialize a variable `substrings` to an empty array
// loop over input string `substring`
  // append the current `substring` at each iteration extracted from the zeroeth index of the string for the length assigned to 1 and incremented by 1 to the empty `substrings` array
// return `substrings` array

3. compare trailing substring with reversed trailing substring using the filter method // `ada` === `ada`, `ad` !== `da`

// call the first function passing in the input string
// filter the return value of calling the first function passing in a callback function to compare strings
// in the callback function, pass in each substring to check if the length is greater than 1 and if the substring reversed is strictly equal
  // if true, return substring 
*/

// palindromes('madam'); // [ "madam", "ada" ]

function isPalindromes(word) {
  console.log(`word: ${word}`);
  let newWord = word.split('').reverse().join('');
  console.log(newWord);
  return word.length > 1 && word === word.split(' ').reverse().join('');
}

function palindromes(str) {
  return substrings(str).filter(isPalindromes);
}

function substrings(str) {
  // declare and initialize a variable `substrings` to an empty array
  let substrings = [];
  // loop over input string
  for (let i = 0; i < str.length; i++) {
    // declare and initialize a variable `substring`
    let substring = str.substring(i);
    // assign `substring` to the substring extracted from the current index of the string to the end of the length of the string
    // reassign the `substrings` array to calling the second function passing in `substring`
    substrings = substrings.concat(leadingSubstrings(substring));
  }
  // return `substrings` array
  return substrings;
}

function leadingSubstrings(substring) {
  // declare and initialize a variable `substrings` to an empty array
  let substrings = [];
  // loop over input string `substring`
  for (let length = 1; length <= substring.length; length++) {
    // append the current `substring` at each iteration extracted from the zeroeth index of the string for the length assigned to 1 and incremented by 1 to the empty `substrings` array
    substrings.push(substring.slice(0, length));
  }
  // return `substrings` array
  return substrings;
}

console.log(palindromes('madam'));

// function isPalindrome(word) {
//   return word.length > 1 && word === word.split('').reverse().join(''); // `ada`
// }

// function palindromes(string) {
//   // call the substrings function passing in `madam`
//   return substrings(string).filter(isPalindrome); // [`a`, `ad`, `ada`, `adam`].filter(callbackFn) => [`ada`]
// }

// function substrings(string) {
//   let substrings = [];
//   // loop over `madam`
//   for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
//     // assign substring to extracting the substring at each index of `madam`, i.e. `madam`, `adam`
//     let substring = string.substring(startIndex);
//     // reassign empty array to arrays merged from return value of function call
//     substrings = substrings.concat(leadingSubstrings(substring)); // [`a`, `ad`, `ada`, `adam`]
//   }

//   return substrings;
// }

// function leadingSubstrings(string) {
//   let substrings = [];
//   // loop over `madam`, `adam`...
//   for (let length = 1; length <= string.length; length += 1) {
//     // append to empty array the specified substrings extracted from `madam`, `adam`... i.e. `a`, `ad`, `ada`, `adam`
//     substrings.push(string.slice(0, length));
//   }

//   return substrings; // i.e. [`a`, `ad`, `ada`, `adam`]
// }

// palindromes('abcd'); // []
// palindromes('madam'); // [ "madam", "ada" ]

// palindromes('hello-madam-did-madam-goodbye');
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// palindromes('knitting cassettes');
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
