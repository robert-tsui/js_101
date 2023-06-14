// Write a function that takes two array arguments, each containing a list of numbers,
// and returns a new array containing the products of all combinations of number pairs that exist between the two arrays.
// The returned array should be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

/*
Understanding the [P]roblem
===========================
Input: 2 arrays

Output: array

Rules:
- output array contains the product of all possible pairs from input array

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- given 2 input arrays of numbers, return a list of all products for all combinations of paired numbers

[2. 4], [4, 3, 1, 2] => [2 * 4, 2 * 3, 2 * 1, 2 * 2, 4 * 4, 4 * 3, 4 * 1, 4 * 2] => [8, 6, 2, 4, 16, 12, 4, 8] => [2, 4, 4, 6, 8, 8, 12, 16]

- loop over input array for the length of the longest array
- multiply current elements from each array
- sort the result array

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize a variable `resultArr` to an empty array
// loop over the longest input array
  // multiply current numbers from each array
  // append product to `resultArr`
// sort `resultArr`
// return `resultArr`

*/
function multiplyAllPairs(arr1, arr2) {
  let resultArr = [];

  arr2.map((num) => {
    for (let i = 0; i < arr1.length; i++) {
      resultArr.push(num * arr1[i]);
    }
  });

  return resultArr.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]
