// Write a function that takes an array as an argument
// and returns an array that contains two elements,
// each of which is an array.
// Put the first half of the original array elements in the first element of the return value,
// and put the second half in the second element.
// If the original array contains an odd number of elements,
// place the middle element in the first half array.

/*
Understanding the [P]roblem
===========================
Input: array

Output: array

Rules:
- input array
- output array with 2 subarrays
- if input array length is odd, append middle element to first half of output array

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]

1 => 0 => subArr1
5 => 1 => subArr1
2 => 2 => subArr1
4 => 3 => subArr2
3 => 4 => subArr2

middle element => Math.floor(array length / 2)


[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize a variable `resultArr` to an empty array with 2 subarrays
// loop over the input array 

  // if length of input array is odd and index is less than the middle index
    // append the current value to `resultArr` at index 0
  // otherwise if index is greater than the middle index
    // append the current value to `resultArr` at index 1

  // otherwise if length of input array is even 
    // append the current value to `resultArr` at index 0
    // append the current value to `resultArr` at index 1

// return `resultArr`
*/

function halvsies(arr) {
  let resultArr = [[], []];
  if (arr.length % 2 !== 0) {
    arr.forEach((el, i) => {
      if (i <= Math.floor(arr.length / 2)) {
        resultArr[0].push(el);
      } else {
        resultArr[1].push(el);
      }
    });
  } else {
    arr.forEach((el, i) => {
      if (i < arr.length / 2) {
        resultArr[0].push(el);
      } else {
        resultArr[1].push(el);
      }
    });
  }

  return resultArr;
}

console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
console.log(halvsies([5])); // [[5], []]
console.log(halvsies([])); // [[], []]
