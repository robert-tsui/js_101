// Write a function that takes an array of numbers
// and returns the sum of the sums of each leading subsequence in that array.
// Examine the examples to see what we mean.
// You may assume that the array always contains at least one number.

/*
Understanding the [P]roblem
===========================
Input: array

Output: number

Rules:
- array contains at least one number
- sum up the sums
- each sequence is a leading subsequence of the original array
- do not sum up sequences from trailing subsequences 

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

given an array of at least one number, return the total sum of individual sums of leading subsequences of numbers from that array

[3, 5, 2] => (3) + (3 + 5) + (3 + 5 + 2) --> 21
              0     0 + 1     0 + 1 + 2
- when extracting a pattern, increment length of each subsequence

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// `sumOfsums`
// declare and initialize a variable `newArr` to an empty array
// create a `for` loop to iterate on the length of the array
  // declare a variable `tempArr` and initialize it to a pattern extracted from the input array at the zeroeth index to the next index, incrementing index by 1 at each iteration
  // append the return value of passing the return value of `tempArr` to a helper function call `sumEachSum`
// return the return value of summing all the elements of `newArr`

// `sumEachSum`
// return the return value of summing all elements for each iteration of `tempArr`
*/

// function sumOfSums(arr) {
//   let newArr = [];
//   for (let length = 1; length <= arr.length; length++) {
//     let tempArr = arr.slice(0, length);
//     newArr.push(sumEachSum(tempArr));
//   }

//   return newArr.reduce((acc, cv) => acc + cv);
// }

// function sumEachSum(arr) {
//   return arr.reduce((acc, cv) => acc + cv);
// }

// LS solution #1

function sumOfSums(arr) {
  let sumTotal = 0;

  for (let idx = 1; idx <= arr.length; idx++) {
    sumTotal += arr.slice(0, idx).reduce((acc, cv) => acc + cv);
  }

  return sumTotal;
}

console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35
