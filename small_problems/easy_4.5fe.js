// Write a function that takes an array of numbers and returns an array with the same number of elements,
// but with each element's value being the running total from the original array.

// Can you rewrite the solution using the Array.prototype.map method?
// What types of problems do you think are well-suited for the Array.prototype.map method?

/*
Understanding the [P]roblem
===========================
Input: array

Output: array

Rules:
- each element in the output array represents the running total from the previous elements summed
- each element in the output array represents the previous elements and the current element summed

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

2 => 2
5 => 2 + 5
13 => 2 + 5 + 13

[D]ata Structure
================
- Do I need an array or an object for my solution? no

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize a variable `newArr` to an empty array
// use a `for` loop to loop over the input array
  // on each iteration, append the sum of the current element and previous elements
// return `newArr`

*/
// when refactoring using `map` you're...
// declaring and initializing a `sum` variable to 0
// declaring and initializing a `resultArray` to the return value of calling `map` on the input array
// using a `for` loop to increment the current element to `sum` at each iteration
// the body of the `for` loop is written in `map` method call but the `for` loop is abstracted away
// returning the `resultArray`
//
function runningTotal(arr) {
  let sum = 0;
  let resultArray = arr.map((el) => (sum += el));

  return resultArray;
}

function runningTotal(arr) {
  let newArr = [];
  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    acc += arr[i];
    newArr.push(acc);
  }

  return newArr;
}

console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(runningTotal([3])); // [3]
console.log(runningTotal([])); // []
