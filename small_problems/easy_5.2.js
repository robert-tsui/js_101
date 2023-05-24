// Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two.
// There should be no duplication of values in the returned array, even if there are duplicates in the original arrays.
// You may assume that both arguments will always be arrays.

/*
Understanding the [P]roblem
===========================
Input: 2 arrays

Output: array

Rules:
- inputs are always arrays
- output array doesn't contain duplicate elements
- output array contains all elements from both input arrays, excluding any duplicates

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- remove duplicates from input arrays
- push elements to new array, except for duplicates

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// map input array 1 and assign to variable `newArr` 
// append elements from array 2 to `newArr`, except for duplicates

*/

function union(arr1, arr2) {
  let newArr = arr1.map((el) => el);

  for (let i = 0; i < arr2.length; i++) {
    if (!newArr.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
