// Write a function that takes a string argument
// and returns a list of substrings of that string.
// Each substring should begin with the first letter of the word,
// and the list should be ordered from shortest to longest.

/*
Understanding the [P]roblem
===========================
Input: string

Output: array

Rules:

- each string in output array contains first letter of input string that increases in length until all characters from input array are appended

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- given an input string, return an array of substrings that populate one letter at a time in increasing length until the original string is copied

'abc' => ["a", "ab", "abc"]
arr[0] ('a') => arr[0] + arr[1] ('ab') => arr[0] + arr[1] + arr[2]
arr[0] => arr[0] + arr[i] => arr[0] + arr[i - 1] + arr[i] => arr[0] + arr[i - 2] + arr[i]

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize a variable `resultArr` to an empty array
// split the input string into an array of characters and assign to `strArr`
// loop over `strArr` 
  // append first character to `resultArr` up to current character to `resultArr`
// return `resultArr`
*/

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}

console.log(leadingSubstrings('abc')); // ["a", "ab", "abc"]
console.log(leadingSubstrings('a')); // ["a"]
console.log(leadingSubstrings('xyzzy')); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
