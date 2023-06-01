// Write a function that takes two array arguments, each containing a list of numbers,
// and returns a new array that contains the product of each pair of numbers from the arguments that have the same index.
// You may assume that the arguments contain the same number of elements.

/*
Understanding the [P]roblem
===========================
Input: 2 arrays

Output: array

Rules:

- 2 input arrays
  - each containing a list of numbers 
  - each containing the same length
- output array 
  - product of number pairs with same indexes

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- 3  5   7 
- 9  10  11
- 27 50  77
[D]ata Structure
================
- Do I need an array or an object for my solution?

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

// declare and initialize a variable `newArr` to an empty array
// loop over one of the input arrays
// compute the product of the element from first array and second array at the same indexes
// append result of each iteration to `newArr`
// return `newArr`
*/

function multiplyList(arr1, arr2) {
  let newArr = [];

  arr1.forEach((el, idx) => {
    let num2 = arr2[idx];
    newArr.push(el * num2);
  });

  return newArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]
