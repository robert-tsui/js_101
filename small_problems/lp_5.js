// Write a function that returns a list of all substrings of a string.
// Order the returned list by where in the string the substring begins.
// This means that all substrings that start at index position 0 should come first,
// then all substrings that start at index position 1, and so on.
// Since multiple substrings will occur at each position,
// return the substrings at a given index from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

/*
Understanding the [P]roblem
===========================
Input: string

Output: array

Rules:

- all substrings start with the letter at each index of the string

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]


-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- given an input string, return an ordered list of all substrings that start with the first letter of each index of the input string

'abcde' => [ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

'abcde' => [`a`, `b`, `c`, `d`, `e`]
[`a`, `b`, `c`, `d`, `e`] => [ "a", "ab", "abc", "abcd", "abcde"] 
[`a`, `b`, `c`, `d`, `e`] => [ "a", "ab", "abc", "abcd", "abcde", "b", "bc", "bcd", "bcde"]
... 

// pass the substrings to `leadingSubstrings` function
// 'abcde'
// 'bcde'
// 'cde'
// 'de'
// 'e'

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize a variable `newStr` to an empty string
// declare and initialize a variable `newArr` to an empty array
// split the string into an ordered list of substrings and assign to `strArr`
// loop over input string
  // extract the whole string starting from current letter
  // push the evaluated result of invoking the `leadingSubstrings` function with the extracted string argument to `newArr`
// flatten the array of subarrays
// return `newArr`

*/

function substrings(str) {
  let newArr = [];
  let strArr = str.split('');

  for (let i = 0; i < strArr.length; i++) {
    newArr.push(leadingSubstrings(str.slice(i)));
  }

  return newArr.flat();
}

function leadingSubstrings(str) {
  let strArr = str.split('');
  return strArr.map((_, i, arr) => {
    return arr.slice(0, i + 1).join('');
  });
}

console.log(substrings('abcde'));

// returns
[
  'a',
  'ab',
  'abc',
  'abcd',
  'abcde',
  'b',
  'bc',
  'bcd',
  'bcde',
  'c',
  'cd',
  'cde',
  'd',
  'de',
  'e',
];
