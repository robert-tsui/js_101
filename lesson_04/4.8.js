/*
# Sort Strings by Most Adjacent Consonants

Given an array of strings, return a new array 
where the strings are sorted to the highest number of adjacent consonants a particular string contains. 
If two strings contain the same highest number of adjacent consonants 
they should retain their original order in relation to each other. 
Consonants are considered adjacent if they are next to each other in the same word 
or if there is a space between two consonants in adjacent words.

## understand the problem

- explicit rules
  - i: array of strings
  - o: new array

  - strings with the highest number of consonants are sorted first
  - if 2 strings have the same highest number of adjacent consonants, retain their original order in relation to each other

- implicit rules
  - adjacent consonants can be found in more than one word separated by a space
  - multiple words can be found in 1 string
  - single consonants in a string do not affect sort order in comparison to strings with no consonants. 
  - only adjacent consonants affect sort order.
  - a sort is not alphabetized in descending order
  - strings can have no adjacent consonants 
  - consonants are counted individually, not as pairs of adjacent consonants

- questions
  - what are adjacent consonants? 
    - consonants that are next to each other in the same word
    - there's space between 2 consonants in adjacent words
  - what should happen to empty strings?
  - can a string not contain any consonants?
  - is case important?
  - how is the sort order defined?
  - what is defined as a consonant?

## examples and test cases

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']

## data structures
- array to strings so we can manipulate letters
- possibly use objects as intermediate structure?
- strings to arrays so we can return the output 

## algorithm

- high level
  - iterate over strings to compare against highest counter
    - if counter of current string is greater than or equal to a counter, append to new array
    - repeat
- low level
  - create an empty array `sortedArr` to hold the new sorted strings
  - create an object of consonants `cacheObj` to compare consonant letters against
  - create a counter `counter` to track number of consonants for first string
  - loop over input array to evaluate each string
  - loop over each string to evaluate each letter
  - check if current letter and next letter match a consonant in `cacheObj` // allow for space character
  - keep matching until no more adjacent consonants
    - if previous adjacents, increment `counter` to track the number of consonants
 - repeat check for the next string
    - if `counter` is equal to next check, append both strings to `sortedArr`, in relative order
    - if `counter` is greater than next check, append previous string to `sortedArr`
  - append all other strings to `sortedArr`
  - return `sortedArr`
- sub-algorithm: given a string, return a count of the highest number of adjacent consonants anywhere in that string.
  - Remove the spaces from the input string
  - Initialize a count to zero
  - Initialize a temp string to an empty string
  - Iterate through the input string. For each letter:
    - If the letter is a consonant, concatenate it to the temp string
    - If the letter is a vowel:
      - If the temp string has has a length greater than 1 AND the temp string has a length greater than the current count, set the count to the length of the temp string
      - Reset the temp string to an empty string
  - Return the count
*/
// ## code implementation
function sortStringsByConsonants(arrOfStrings) {
  let sortedStrings = arrOfStrings.sort(
    (a, b) => countMaxAdjacentConsonants(b) - countMaxAdjacentConsonants(a)
  );

  return sortedStrings;
}
function countMaxAdjacentConsonants(str) {
  let strWithoutSpaces = str.split(' ').join('');
  let count = 0;
  let tempStr = '';
  let consonantRegex = /[bcdfghjklmnpqrstvwxys]/gi;

  for (let i = 0; i < strWithoutSpaces.length; i++) {
    if (strWithoutSpaces[i].match(consonantRegex)) {
      tempStr += strWithoutSpaces[i];
      if (tempStr.length > 1 && tempStr.length > count) {
        count = tempStr.length;
      }
    } else {
      if (tempStr.length > 1 && tempStr.length > count) {
        count = tempStr.length;
      }
      tempStr = '';
    }
  }

  return count;
}

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(
  sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])
); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']
