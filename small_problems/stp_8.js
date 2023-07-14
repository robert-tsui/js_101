// Write a function that takes a string as an argument
// and returns an array that contains every word from the string,
// with each word followed by a space and the word's length.
// If the argument is an empty string or if no argument is passed, the function should return an empty array.

// You may assume that every pair of words in the string will be separated by a single space.

/*
Understanding the [P]roblem
===========================
Input: str

Output: arr

Rules:
- every pair of words in a string will be separated by a single space
- word + " " + word.length
- symbols count in the word's length
- empty strings and no arguments return an empty array

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

'cow sheep chicken' => ["cow 3", "sheep 5", "chicken 7"]

'cow' => ['cow'] => ['cow 3']

transformation list strategy

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// split the input string into an array of words
// transform the array of words
  // append the word length to the current word separated by a single space
// return the array
*/

function wordLengths(str) {
  if (str === '' || str === undefined) {
    return [];
  }
  return str.split(' ').map((word) => word + ' ' + word.length);
}
console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// // ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths('')); // []
console.log(wordLengths()); // []
