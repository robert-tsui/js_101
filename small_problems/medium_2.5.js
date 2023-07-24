/*

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

*/

// featured(12); // 21
// featured(20); // 21
// featured(21); // 35
// featured(997); // 1029
// featured(1029); // 1043
// featured(999999); // 1023547
// featured(999999987); // 1023456987
// featured(9876543186); // 9876543201
// featured(9876543200); // 9876543201
// featured(9876543201); // "There is no possible number that fulfills those requirements."

/*
Understanding the [P]roblem
===========================
Input: number

Output: number

Rules:
- featured number 
-- is odd
-- is multiple of 7
-- doesn't have duplicate digits
- output is next featured number after argument
- return an error message if there's no next featured number

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements


-- Intermission --
featured(12); // 21

7 => 14 => 21 => 28
odd        odd

Fn duplicateDigits 

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
// declare a variable multiplesOfSeven and initialize to 7
// loop over multiplesOfSeven multiplied by odd factors
  // invoke duplicateDigits passing in the current multiple
// return error message if no next featured number
// otherwise, return result

*/

function featured(number) {
  let result;
  const MAX_FEATURED = 9876543201;
  for (let multiple = 7; multiple <= MAX_FEATURED; multiple += 14) {
    if (multiple > number && duplicateDigits(multiple)) {
      result = multiple;
      return result;
    }
  }

  return 'There is no possible number that fulfills those requirements.';
}

function duplicateDigits(number) {
  let seen = {};
  let stringNumbers = String(number).split('');
  for (let index = 0; index < stringNumbers.length; index += 1) {
    if (seen[stringNumbers[index]]) {
      return false;
    }

    seen[stringNumbers[index]] = true;
  }

  return true;
}

// const MAX_FEATURED = 9876543201;

// function featured(number) {
//   let featured = toOddMultipleOf7(number);

//   do {
//     if (allUnique(featured)) {
//       return featured;
//     }
//     featured += 14;
//   } while (featured <= MAX_FEATURED);

//   return 'There is no possible number that fulfills those requirements.';
// }

// function allUnique(number) {
//   let stringNumber = String(number).split('');
//   let seen = {};

//   for (let index = 0; index < stringNumber.length; index += 1) {
//     if (seen[stringNumber[index]]) {
//       return false;
//     }

//     seen[stringNumber[index]] = true;
//   }

//   return true;
// }

// function toOddMultipleOf7(number) {
//   do {
//     number += 1;
//   } while (number % 2 === 0 || number % 7 !== 0);
//   return number;
// }

console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9876543186)); // 9876543201
console.log(featured(9876543200)); // 9876543201
console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."
