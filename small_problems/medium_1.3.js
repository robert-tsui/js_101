/*

Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

*/

// maxRotation(735291); // 321579
// maxRotation(3); // 3
// maxRotation(35); // 53
// maxRotation(105); // 15 -- the leading zero gets dropped
// maxRotation(8703529146); // 7321609845

/*
Understanding the [P]roblem
===========================
Input: Number

Output: Number

Rules:
- rotation order
1. rotate rightmost digit
2. using new number, fix leftmost digits incrementally by one and rotate rightmost digit until the last two digits are rotated
- use rotateRightmostDigits function

[E]xamples and Test Cases
=========================
735291 => 352917 => 329175 => 321759 => 321597 => 321579
105 => 051 => 15
8703529146 => 7035291468 => 7352914680 => 7329146805 => 7321468059 => 7321609845 

-- Intermission --
- rotate it (pass to rotateRightmostDigits function)
- loop return value as a string
- split string at starting index for as long as index is less than length of string minus 2
- concatenate first part of string with return value of passing second part of string to rotateRightmostDigits function
- return maximally rotated number 

[D]ata Structure
================
- Do I need an array or an object for my solution? String

[A]lgorithm
===========
// declare a variable `rotatedOnce` and initialize it to the return value of invoking `rotateRightmostDigits` function
  // coerce `rotatedOnce` to a string
// declare a variable `resultString` and initialize to an empty string
// loop over `rotatedOnce` for as long as index is less than length of `rotatedOnce` minus 2
  // slice string at starting index and assign to new variable `firstPart`
  // declare and initialize new variable `secondPart` to the index incremented by 1
  // reassign `resultString` to `firstPart` concatenated with the return value of passing second part of string to `rotateRightmostDigits` function  
// return `resultString` as a number

*/
// 8703529146 => "7035291468"
// "7"
// "035291468"
// "352914680"
// "7" + "352914680"
// "7352914680"
// "73"
// "52914680"
// "29146805"
// "73" + "29146805"
// "7329146805"
// => 7352914680 => 7329146805 => 7321468059 => 7321609845

// rotate, (slice, rotate, concat)

// function maxRotation(number) {
//   let resultString = rotateRightmostDigits(number);
//   console.log(`resultString: `, resultString);

//   for (let index = 1; index < resultString.length - 1; index += 1) {
//     console.log(`index: `, index);
//     let firstPart = resultString.slice(0, index);
//     console.log(`firstPart: `, firstPart);
//     console.log(`index: `, index);
//     let secondPart = resultString.slice(index);
//     console.log(`secondPart: `, secondPart);
//     console.log(`index: `, index);
//     resultString = firstPart + rotateRightmostDigits(secondPart);
//     console.log(`resultString: `, resultString);
//   }

//   return Number(resultString);
// }

function rotateRightmostDigits(number, count) {
  // slice number into 2 parts using the number of digits and decreasing count to determine the index at where to slice
  // rotate second part using a helper function
  // concatenate second part with first part
  // return the value
  console.log(`count: `, count);
  let numberString = String(number);
  console.log(`numberString: `, numberString);
  let firstPart = numberString.slice(0, numberString.length - count);
  console.log(`firstPart: `, firstPart);
  let secondPart = numberString.slice(numberString.length - count);
  console.log(`secondPart: `, secondPart);
  let resultString = firstPart + rotateSecondPart(secondPart);
  console.log(`resultString: `, resultString);

  return resultString;
}

function rotateSecondPart(string) {
  return string.slice(1).concat(string[0]);
}

// LS solution

function maxRotation(number) {
  // the number of digits
  let numberDigits = String(number).length;
  console.log(`numberDigits: `, numberDigits);
  // pass the number and count of digits to the helper function until last 2 digits are rotated
  for (let count = numberDigits; count >= 2; count--) {
    // reassign the input number to the return value of calling the helper function passing in the input number and count as arguments
    number = rotateRightmostDigits(number, count);
  }
  return number;
}

console.log(maxRotation(735291)); // 321579
// console.log(maxRotation(3)); // 3
// console.log(maxRotation(35)); // 53
// console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146)); // 7321609845
