// Write a function that takes an array of integers as input,
// multiplies all of the integers together, divides the result by the number of entries in the array,
// and returns the result as a string with the value rounded to three decimal places.

/*
Understanding the [P]roblem
===========================
Input: array

Output: string

Rules:
- input array of integers
- output string multiplies all integers together, divides result by length of array
- output value is rounded to 3 decimal places

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- [3, 5] => 3 * 5 => 15 / 2 => 7.5 => 7.500

- take an array of integers and multiply them together dividing by the number of integers in the array, 
- then returning the result rounded to the nearest 3 decimal places

[D]ata Structure
================
- Do I need an array or an object for my solution? no

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

multiplicativeAverage([3, 5]);                   // "7.500"

// declare and initialize a variable `product` to the value of `1`
// loop over the input array that iterates for the length of the array
  // on each iteration, multiply `product` by the current value
// at the end of the loop, divide the `product` by the length of the array
// round the result to the nearest 3 decimals - invoke a helper function
// return the result as a string
*/

function multiplicativeAverage(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  product = product / arr.length;
  return roundToThreeDecimals(product, 3);
}

function roundToThreeDecimals(number, decimalPlaces) {
  let factorOfTen = Math.pow(10, decimalPlaces);

  return (Math.round(number * factorOfTen) / factorOfTen).toFixed(3);
}

console.log(multiplicativeAverage([3, 5])); // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17])); // "28361.667"
