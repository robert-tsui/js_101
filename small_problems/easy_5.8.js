// Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

/*
Understanding the [P]roblem
===========================
Input: number

Output: array

Rules:

- output array contains a list of digits in the number

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

digitList(12345);       // [1, 2, 3, 4, 5]
12345 => "12345" => [1] => [1, 2] => [1, 2, 3]

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

digitList(12345);       // [1, 2, 3, 4, 5]
12345 => "12345" => [1] => [1, 2] => [1, 2, 3]

// declare and initialize a variable `newArr` to an empty array
// convert the number to a string and assign to a variable `numStr`
// loop over `numStr` for the length of the string
  // append the current value converted back to a number in each iteration to `newArr`
// return `newArr`  

*/

// function digitList(num) {
//   let newArr = [];
//   let numStr = num.toString();

//   for (let i = 0; i < numStr.length; i++) {
//     newArr.push(Number(numStr[i]));
//   }

//   return newArr;
// }

// using map

function digitList(num) {
  let numStrArr = String(num).split('');
  let newArr = numStrArr.map((el) => Number(el));
  return newArr;
}

console.log(digitList(12345)); // [1, 2, 3, 4, 5]
