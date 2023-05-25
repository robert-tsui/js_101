// Write a function that combines two arrays passed as arguments,
// and returns a new array that contains all elements from both array arguments,
// with each element taken in alternation.
// You may assume that both input arrays are non-empty,
// and that they have the same number of elements.

/*
Understanding the [P]roblem
===========================
Input: 2 arrays

Output: array

Rules:
- input arrays have same number of elements
- output array contains elements alternated from input arrays

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

interleave([1, 2, 3], ['a', 'b', 'c']); // [1, "a", 2, "b", 3, "c"]

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

append the elements from 2 arrays in alternation to a new array

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize a variable `newArr` to an empty array
// use a helper function to append the elements from the input arrays
// return `newArr`
*/

function interleave(arr1, arr2) {
  let newArr = [];
  helper(newArr, arr1, arr2);
  return newArr;
}

function helper(resultArr, arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    resultArr.push(arr1[i]);
    resultArr.push(arr2[i]);
  }
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"]
