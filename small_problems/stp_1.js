// Write a function that takes a string argument
// and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise.
// Ignore characters that are not alphabetic.

/*
Understanding the [P]roblem
===========================
Input: string

Output: boolean

Rules:
- return true if all alphabetic characters are uppercase; false otherwise
- not alphabetic? ignore

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- given an input string, return true if all alphabetic characters are uppercase while ignoring non-alphabetic characters

[A, B, C, etc.] => if reference array doesn't have the input string's characters, return false

[D]ata Structure
================
- Do I need an array or an object for my solution?

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare a variable `refArr` and initialize to an array with the alphabet in uppercase
// split the string into an array of characters and assign to `strArr`
// loop over `strArr` 
  // use a conditional statement to check if `refArr` doesn't include the current character
  // if so, return true; otherwise, return false
*/

// declare a `const` variable `REF_ARR` and initialize to an array with the alphabet in uppercase
const UPPER_REF = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const LOWER_REF = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

function isUppercase(str) {
  // insert guard clause for handling an empty string argument
  if (str === '') return true;
  // split the string into an array of characters and assign to `strArr`
  let strArr = str.split('');
  console.log(`strArr: `, strArr);
  // declare and initialize two variables to empty arrays
  let upperCaseArr = [];
  let lowerCaseArr = [];

  // loop over the array of characters from string argument
  for (let i = 0; i < strArr.length; i++) {
    let char = strArr[i];
    console.log(`char: `, char);
    // use a conditional statement to check if current characters are upper or lowercase
    if (UPPER_REF.includes(char)) {
      // if so, append to `upperCaseArr`
      upperCaseArr.push(char);
      console.log(`upperCaseArr: `, upperCaseArr);
      // else if, append lowercase letter to `lowerCaseArr`
    } else if (LOWER_REF.includes(char)) {
      lowerCaseArr.push(char);
      upperCaseArr.push('');
      console.log(`lowerCaseArr: `, lowerCaseArr);
      console.log(`upperCaseArr: `, upperCaseArr);
    }
  }

  return UpperCase(upperCaseArr, lowerCaseArr);
}

function UpperCase(upperCaseArr, lowerCaseArr) {
  // loop over array of uppercase letters
  for (let i = 0; i < upperCaseArr.length; i++) {
    let upperChar = upperCaseArr[i];
    let lowerChar = lowerCaseArr[i];
    // check for false condition; if both uppercase and lowercase letters exist, if there are no uppercase letters, or if only lowercase letters exist
    if (
      (UPPER_REF.includes(upperChar) && LOWER_REF.includes(lowerChar)) ||
      upperCaseArr.length === 0 ||
      (LOWER_REF.includes(lowerChar) && upperCaseArr.length === 1)
    ) {
      // if so, return false; otherwise return true
      return false;
    } else {
      return true;
    }
  }
}

console.log(isUppercase('t')); // false
console.log(isUppercase('T')); // true
console.log(isUppercase('Four Score')); // false
console.log(isUppercase('FOUR SCORE')); // true
console.log(isUppercase('4SCORE!')); // true
console.log(isUppercase('')); // true
