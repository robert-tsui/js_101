/*

Write a function that rotates the last count digits of a number. 
To perform the rotation, move the first of the digits that you want to rotate 
to the end and shift the remaining digits to the left.

*/

// rotateRightmostDigits(735291, 1); // 735291
// rotateRightmostDigits(735291, 2); // 735219
// rotateRightmostDigits(735291, 3); // 735912
// rotateRightmostDigits(735291, 4); // 732915
// rotateRightmostDigits(735291, 5); // 752913
// rotateRightmostDigits(735291, 6); // 352917

/*
Understanding the [P]roblem
===========================
Input: 2 numbers

Output: number

Rules:
- count argument provides the place value of the number argument
- move the number at the place value to the end and shift the rest of the numbers to the left

[E]xamples and Test Cases
=========================
- the ones place is already at the end so the output remains unchanged

-- Intermission --

735291, 6 => 352917
735291 => "735291" => ['7','3','5','2','9','1'] => ['3','5','2','9','1'] + '7' => ['3','5','2','9','1','7'] => '352917' = 352917 

count => 1 
index => 5
count => 2 
index => 4
count => 3 
index => 3

// if count = 1
  // counter = 1 
  // index = arg.length
// if count >= 1
  // counter ++
  // index -- 

count => 1, 2, 3, etc.
index => 5, 4, 3, etc.
last index => length of array - 1

[D]ata Structure
================
array

[A]lgorithm
===========
// coerce input number to a string
// declare a variable `arrOfnums` and initialize to splitting the string number into an array of string numbers
// declare a variable `counter` and initialize to `1`
// declare a variable `index`
// create a conditional statement
  // if `count` is strictly equal to `1`
    // reassign `index` to the length of `arrOfnums`
    // call the `rotate` function passing in `index`
  // if `count` is greater than `1`
//

735291, 6 => 352917
735291 => "735291" => ['7','3','5','2','9','1'] => ['3','5','2','9','1'] + '7' => ['3','5','2','9','1','7'] => '352917' = 352917 

*/

// solution using String and Array

// function rotateRightmostDigits(num, count) {
//   let stringNum = num.toString();
//   let index = stringNum.length - count;
//   let unchangedPart = [];
//   unchangedPart.push(stringNum.slice(0, index));
//   let rotatedPart = stringNum.slice(index);

//   return unchangedPart.concat(rotateSecondPart(rotatedPart)).join('');
// }

// function rotateSecondPart(str) {
//   let arr = str.split('');
//   return arr.slice(1).concat(arr[0]);
// }

// solution using String

function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateSecondPart(secondPart);

  return Number(resultString);
}

function rotateSecondPart(string) {
  return string.slice(1).concat(string[0]);
}

console.log(rotateSecondPart('91'));

console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917
