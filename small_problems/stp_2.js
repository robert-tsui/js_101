// Write a function that takes an array of strings and returns an array of the same string values,
// but with all vowels (a, e, i, o, u) removed.

/*
Understanding the [P]roblem
===========================
Input: array

Output: array

Rules:
- vowels are removed in output array
- a string will be empty if no letters are present after removing vowels
- 

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- given an input array, remove all vowels from all strings and return as a new array
- ['green'] => ["grn"]
- reference array of vowels needed
- append letter unless `e` is in reference array, don't append

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare a variable `strArr` and initialize to an empty array
// declare a variable `resultArr` and intialize to an empty array
// declare a `const` variable `vowels` and initialize to an array of vowels
// split the argument string into an array of characters and reassign to `strArr`
// loop over `strArr` as long as the condition is true
// append to `resultArr` unless current character is not in `vowels`
// return `resultArr`
*/

// declare a `const` variable `vowels` and initialize to an array of vowels
// const VOWELS = ['a', 'e', 'i', 'o', 'u'];

// function removeVowels(arr) {
//   // loop over argument array and pass each string to helper function `removeVowelsfromEachString`
//   // declare a variable `newArr` and initialize to the return value to `map`
//   let resultArr = arr.map((str) => {
//     // declare a variable `resultArr` and initialize to an empty array
//     let newArr = [];
//     // concantenate the return value of `removeVowelsFromEachString` to `resultArr`
//     return newArr.concat(removeVowelsFromEachString(str));
//   });
//   // flatten the array to a depth of 1
//   // console.log(`newArr: `, newArr);
//   return resultArr.flat();
// }

// function removeVowelsFromEachString(str) {
//   // console.log(str);
//   // declare a variable `strArr` and initialize to the argument string split into an array of characters
//   let chars = str.split('');
//   // console.log(strArr);
//   // declare a variable `resultArr` and initialize to an empty array
//   let removedVowels = [];
//   // loop over `strArr` for the length of the array
//   for (let i = 0; i < chars.length; i++) {
//     let char = chars[i];
//     // append all current characters to `resultArr` that are not vowels
//     if (VOWELS.includes(char.toLowerCase())) {
//       continue;
//     } else {
//       removedVowels.push(char);
//     }
//   }

//   // join the characters together as one string
//   return removedVowels.join('');
// }

// LS solution

// ['green', 'YELLOW', 'black', 'white']
// ['green'] => [ 'g', 'r', 'e', 'e', 'n' ] => [ 'g', 'r', '', '', 'n' ] => [ 'grn' ]

// function removeVowels(stringArray) {
//   return stringArray.map((string) => {
//     let chars = string.split('');
//     console.log(`chars: `, chars);
//     console.log(`helperFunctionReturnValue: `, deleteVowels(chars));
//     let removedVowels = deleteVowels(chars);
//     console.log(`removedVowels:`, removedVowels);
//     return removedVowels.join('');
//   });
// }

// function deleteVowels(array) {
//   console.log(`array: `, array);
//   const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//   return array.map((char) => {
//     if (VOWELS.indexOf(char) >= 0) {
//       console.log(`vowel: `, char);
//       return '';
//     } else {
//       console.log(`consonant: `, char);
//       return char;
//     }
//   });
// }

// student solution using reduce

function removeVowels(arr) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return arr.reduce((acc, str) => {
    let result = str
      .split('')
      .filter((char) => !VOWELS.includes(char))
      .join('');

    acc.push(result);
    return acc;
  }, []);
}

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz'])); // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white'])); // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ'])); // ["BC", "", "XYZ"]
