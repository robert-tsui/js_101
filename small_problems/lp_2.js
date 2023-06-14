// Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

// zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

/*
Understanding the [P]roblem
===========================
Input: array

Output: array

Rules:

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

[D]ata Structure
================
- Do I need an array or an object for my solution?

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize a variable `alphaObj` to an empty object
// add a key value pair with the number as key and alphanumeric as value
// iterate over object 
// create a conditional statement to check if key value pair has a value that corresponds to its UTF-16 code equivalent
// return the code equivalent

alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

*/
// const ALPHA_ARR = [
//   'zero',
//   'one',
//   'two',
//   'three',
//   'four',
//   'five',
//   'six',
//   'seven',
//   'eight',
//   'nine',
//   'ten',
//   'eleven',
//   'twelve',
//   'thirteen',
//   'fourteen',
//   'fifteen',
//   'sixteen',
//   'seventeen',
//   'eighteen',
//   'nineteen',
// ];

// function wordSort(num1, num2) {
//   if (ALPHA_ARR[num1] > ALPHA_ARR[num2]) {
//     return 1;
//   } else if (ALPHA_ARR[num1] < ALPHA_ARR[num2]) {
//     return -1;
//   } else {
//     return 0;
//   }
// }
// function alphabeticNumberSort(arr) {
//   return [...arr].sort(wordSort);
// }

// student solution using two reference objects
function alphabeticNumberSort(array) {
  let object1 = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };

  let object2 = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
  };

  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    result.push(object1[array[index]]);
  }
  result.sort();
  let output = [];
  for (let index = 0; index < result.length; index += 1) {
    output.push(object2[result[index]]);
  }
  return output;
}

console.log(
  alphabeticNumberSort([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ])
);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
